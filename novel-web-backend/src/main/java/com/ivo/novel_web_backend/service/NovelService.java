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
    @Transactional
    public NovelDTO createNovel(NovelDTO dNovel) {
        if(dNovel.getGenres().get(0) == null){
            throw new AppException(ErrorCode.CATCH_ERROR);
        }

        if (dNovel.getPublicId() == null) {
            dNovel.setPublicId(UUID.randomUUID());
        }

        List<GenreDTO> genres = dNovel.getGenres();

        // Save genres before associating them with the novel
        genres.forEach(genre -> {
            if (!genreRepository.existsGenresByName(genre.getName())) {
                genreService.createGenre(new GenreDTO(genre.getName()));
            }
        });

        // Ensure that all genres are saved and then fetch them from the database
        List<Genre> savedGenres = genres.stream()
                .map(genre -> genreRepository.findByName(genre.getName()).orElse(null)) // Extract Genre from Optional
                .filter(Objects::nonNull) // Make sure to exclude any null values
                .collect(Collectors.toList());

        // Chuyển từ NovelDTO sang Novel
        Novel novelEntity = novelMapper.NovelDTOToNovel(dNovel);

        if (novelRepository.existsByTitle(novelEntity.getTitle())) {
            throw new RuntimeException("Title '" + novelEntity.getTitle() + "' is already taken!");
        }

        Set<Genre> setGenres = new HashSet<>(savedGenres); // Ensure all genres are saved
        novelEntity.setGenres(setGenres);
        novelEntity.setPublishedDate(LocalDate.now());
        novelEntity.setRanking(9999);
        novelEntity.setChapterNumber(0);
        novelRepository.save(novelEntity);
        NovelDTO novelDTO = novelMapper.NovelToNovelDTO(novelEntity);
        novelDTO.setGenres(genreMapper.GenreSetToGenreDTOList(setGenres));
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
        try{
        if(id==null){
            return getSampleNovel();
        }
        return novelMapper.NovelToNovelDTO(novelRepository.findByPublicId(id));}catch (Exception e){

            return getSampleNovel();
        }
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
        List<GenreDTO> genres = new LinkedList();
        GenreDTO genre1 = new GenreDTO( UUID.randomUUID(), "Action");
        GenreDTO genre2 = new GenreDTO(  UUID.randomUUID(),"Adventure");
        GenreDTO genre3 = new GenreDTO( UUID.randomUUID(),"Fantasy");
        genres.add(genre1);
        genres.add(genre2);
        genres.add(genre3);
        novel.setGenres(genres);

        return novel;
    }

}
