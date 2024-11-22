package com.ivo.novel_web_backend.service;

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
import java.util.Optional;
import java.util.UUID;

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
}
