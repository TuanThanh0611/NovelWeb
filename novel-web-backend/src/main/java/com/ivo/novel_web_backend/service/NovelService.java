package com.ivo.novel_web_backend.service;

import com.ivo.novel_web_backend.Enums.Status;
import com.ivo.novel_web_backend.Exception.AppException;
import com.ivo.novel_web_backend.Exception.ErrorCode;
import com.ivo.novel_web_backend.dto.DNovel;
import com.ivo.novel_web_backend.entity.Genre;
import com.ivo.novel_web_backend.entity.Novel;
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

@Service
public class NovelService {
    @Autowired
    NovelRepository novelRepository;
    @Autowired
    GenreRepository genreRepository;
    @Autowired
    NovelMapper novelMapper;
    private static final String UPLOAD_DIR = "/path/to/upload/directory";
    @Transactional
    public DNovel createNovel(DNovel dNovel) {

        if (dNovel.getPublicId() == null) {
            dNovel.setPublicId(UUID.randomUUID());
        }

        Novel novelEntity = novelMapper.DNovelToNovel(dNovel);
        if (novelRepository.existsByTitle(novelEntity.getTitle())) {
            throw new RuntimeException("Title '" + novelEntity.getTitle() + "' is already taken!");
        }
        novelEntity.setPublishedDate(LocalDate.now());
        novelEntity.setRanking(9999);
        novelEntity.setChapterNumber(0);
        novelRepository.save(novelEntity);
//        if(novelEntity.getTitle()!=null){
//            throw new AppException(ErrorCode.CATCH_ERROR);
//        }
        return novelMapper.NovelToDNovel(novelEntity);

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
    public List<DNovel> getAllNovels() {
        if(novelRepository.findAll().get(0).getId()==null){
            throw new AppException(ErrorCode.CATCH_ERROR);
        }
        return novelMapper.NovelListToDNovelList(novelRepository.findAll());

    }
    @Transactional
    public UUID deleteNovel(UUID productId) {
        novelRepository.deleteByPublicId(productId);

        return productId;
    }
    @Transactional
    public Novel getNovelById(UUID id) {
        try{
        if(id==null){
            return getSampleNovel();
        }
        return novelRepository.findByPublicId(id);}catch (Exception e){
            return getSampleNovel();
        }
    }
    private Novel getSampleNovel() {
        Novel novel = new Novel();
        novel.setPublicId(null);
        novel.setTitle("The Return of the Legendary All-Master");
        novel.setSubtitle("역대급 올마스터의 회귀");
        novel.setAuthName("Kite");
        novel.setRanking(1083);
        novel.setStar(3.6);
        novel.setDescription("An epic return of the legendary master in the martial world.");
        novel.setViews(2430);
        novel.setChapterNumber(223);
        novel.setPublishedDate(LocalDate.now().minusYears(1)); // Sample Published Date
        novel.setStatus(Status.ONGOING);
        novel.setSummary("The first-ever virtual reality game, New World. Synchronization starts.");
        novel.setCover("http://localhost:8080/images/cổ-chân-nhân.jpg");

        // Sample Genres (Now using Genre entity)
        Set<Genre> genres = new HashSet<>();
        Genre genre1 = new Genre(1L, "Action", UUID.randomUUID(), null);
        Genre genre2 = new Genre(2L, "Adventure", UUID.randomUUID(), null);
        Genre genre3 = new Genre(3L, "Fantasy", UUID.randomUUID(), null);
        genres.add(genre1);
        genres.add(genre2);
        genres.add(genre3);
        novel.setGenres(genres);

        return novel;
    }

}
