package com.ivo.novel_web_backend.service;

import com.ivo.novel_web_backend.Enums.Status;
import com.ivo.novel_web_backend.Exception.AppException;
import com.ivo.novel_web_backend.Exception.ErrorCode;
import com.ivo.novel_web_backend.dto.DNovel;
import com.ivo.novel_web_backend.dto.GenreDTO;
import com.ivo.novel_web_backend.dto.NovelDTO;
import com.ivo.novel_web_backend.entity.Genre;
import com.ivo.novel_web_backend.entity.Novel;
import com.ivo.novel_web_backend.mapper.GenreMapper;
import com.ivo.novel_web_backend.mapper.NovelMapper;
import com.ivo.novel_web_backend.repository.GenreRepository;
import com.ivo.novel_web_backend.repository.NovelRepository;
import jakarta.transaction.Transactional;
import jdk.jfr.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class NovelService {
    @Autowired
    NovelRepository novelRepository;
    @Autowired
    GenreRepository genreRepository;
    @Autowired
    NovelMapper novelMapper;
    @Autowired
    GenreMapper genreMapper;
    @Autowired
    GenreService genreService;
    private static final String UPLOAD_DIR = "/path/to/upload/directory";

    public NovelService(NovelRepository novelRepository, GenreRepository genreRepository, NovelMapper novelMapper, GenreMapper genreMapper, GenreService genreService) {
        this.novelRepository = novelRepository;
        this.genreRepository = genreRepository;
        this.novelMapper = novelMapper;
        this.genreMapper = genreMapper;
        this.genreService = genreService;
    }

    @Transactional
    public NovelDTO createNovel(NovelDTO dNovel) {
        if (dNovel.getPublicId() == null) {
            dNovel.setPublicId(UUID.randomUUID());
        }
        // Chuyển từ NovelDTO sang Novel
        Novel novelEntity = novelMapper.NovelDTOToNovel(dNovel);

        if (novelRepository.existsByTitle(novelEntity.getTitle())) {
            throw new RuntimeException("Title '" + novelEntity.getTitle() + "' is already taken!");
        }
        List<Genre> list=dNovel.getGenres();
        Set<Genre> genres = new HashSet<>();
        for (Genre genre : list) {

            Genre genreT = genreRepository.findByPublicId(genre.getPublicId());
            genres.add(genreT);
        }
        novelEntity.setGenres(genres);

        novelEntity.setRating((double) 0);
        novelEntity.setPublishedDate(LocalDate.now());
        novelEntity.setRanking(9999);
        novelEntity.setChapterNumber(0);
        novelRepository.save(novelEntity);
        NovelDTO novelDTO = novelMapper.NovelToNovelDTO(novelEntity);
        if(novelDTO.getGenres()==null){
            System.out.println(novelDTO.getGenres().get(0).getName());
        }
        return novelMapper.NovelToNovelDTO(novelEntity);
    }

        @Transactional
    public void deleteNovelByGenre(UUID categoryId) {
        Genre genre = genreRepository.findByPublicId(categoryId);
        novelRepository.deleteByGenresContaining(genre);
    }
    @Transactional
    public String saveFile(MultipartFile file) throws IOException {
        // Tạo tên file duy nhất bằng cách sử dụng timestamp
        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        Path path = Paths.get(UPLOAD_DIR, fileName);

        // Lưu file vào thư mục đã cấu hình
        Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
        return fileName;  // Trả về tên file đã lưu
    }

    @Transactional
    public List<NovelDTO> getAllNovels() {
        if(novelRepository.findAll().get(0).getId()==null){
            throw new AppException(ErrorCode.CATCH_ERROR);
        }
        return novelMapper.NovelListToNovelDTOList(novelRepository.findAll());

    }
    @Transactional
    public UUID deleteNovel(UUID publicId) {
        Novel novel = novelRepository.findByPublicId(publicId);
        if (novel != null) {
            // Xóa các quan hệ trong bảng novel_genre_mapping
            novel.getGenres().clear(); // Xóa các quan hệ genre của novel

            // Sau khi xóa các quan hệ, tiến hành xóa novel
            novelRepository.delete(novel);
        }
        return publicId;
    }
    @Transactional
    public NovelDTO getNovelById(UUID id) {

        if(id==null){
            return getSampleNovel();
        }if(novelMapper.NovelToNovelDTO(novelRepository.findByPublicId(id)).getGenres()==null){
            throw new AppException(ErrorCode.CATCH_ERROR);
        }
        return novelMapper.NovelToNovelDTO(novelRepository.findByPublicId(id));

    }
    private NovelDTO getSampleNovel() {
        NovelDTO novel = new NovelDTO();
        novel.setPublicId(null);
        novel.setTitle("The Return of the Legendary All-Master");
        novel.setSubtitle("역대급 올마스터의 회귀");
        novel.setAuthName("Kite");
        novel.setRanking(1083);
        novel.setRating(3.6);
        novel.setDescription("An epic return of the legendary master in the martial world.");
        novel.setViews(2430);
        novel.setChapterNumber(223);
        novel.setPublishedDate(LocalDate.now().minusYears(1)); // Sample Published Date
        novel.setStatus(Status.ONGOING);
        novel.setCover("http://localhost:8080/images/cổ-chân-nhân.jpg");

        // Sample Genres (Now using Genre entity)


        return novel;
    }

}
