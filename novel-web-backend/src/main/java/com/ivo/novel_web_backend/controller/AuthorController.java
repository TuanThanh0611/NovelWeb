package com.ivo.novel_web_backend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ivo.novel_web_backend.Exception.AppException;
import com.ivo.novel_web_backend.Exception.ErrorCode;
import com.ivo.novel_web_backend.dto.DNovel;
import com.ivo.novel_web_backend.dto.GenreDTO;
import com.ivo.novel_web_backend.dto.NovelDTO;
import com.ivo.novel_web_backend.dto.response.ApiResponse;
import com.ivo.novel_web_backend.mapper.NovelMapper;
import com.ivo.novel_web_backend.service.AuthorService;
import com.ivo.novel_web_backend.service.NovelService;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/author")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Slf4j
public class AuthorController {
    @Autowired
    NovelService novelService;
    @Autowired
    AuthorService authorService;
    @Autowired
    NovelMapper novelMapper;
    @Value("${file.upload-dir:src/main/resources/images}") // Đường dẫn mặc định
    private String uploadDir;


    @PostMapping("/create-novel")
    public ResponseEntity<ApiResponse<NovelDTO>> save(
            @RequestParam("title") String title,
            @RequestParam("author") String author,
            @RequestParam("description") String description,
            @RequestParam("genres") String genres, // genres is a JSON string
            @RequestParam("cover") MultipartFile coverFile
    ) {
        ApiResponse<NovelDTO> apiResponse = new ApiResponse<>();
        ObjectMapper objectMapper = new ObjectMapper();
        List<GenreDTO> genreList = null;

        // Handle genres (JSON string to list of GenreDTO)
        try {
            // Đọc genres từ chuỗi JSON và chuyển thành danh sách các UUID
            List<UUID> genreIds = objectMapper.readValue(
                    genres,
                    objectMapper.getTypeFactory().constructCollectionType(List.class, UUID.class)
            );

            // Chuyển đổi mỗi UUID thành một đối tượng GenreDTO
            genreList = new ArrayList<>();
            for (UUID genreId : genreIds) {
                GenreDTO genreDTO = new GenreDTO();
                genreDTO.setPublicId(genreId);
                genreList.add(genreDTO);
            }

        } catch (JsonProcessingException e) {
            log.error("Error parsing genres JSON: {}", genres, e);
            throw new AppException(ErrorCode.MAXLENGTH);
        }

        // Handle cover file
        String originalFilename = coverFile.getOriginalFilename();
        if (originalFilename == null || originalFilename.isEmpty()) {
            throw new AppException(ErrorCode.CATCH_ERROR);
        }

        String fileExtension = originalFilename.substring(originalFilename.lastIndexOf("."));
        String newFileName = title.replaceAll("[^a-zA-Z0-9]", "_") + fileExtension;
        File uploadDirectory = new File(uploadDir);
        if (!uploadDirectory.exists()) {
            uploadDirectory.mkdirs();
        }

// handle loi o day
        File destinationFile = new File(uploadDir + "/" + newFileName);
        try {
            coverFile.transferTo(destinationFile);
        } catch (IOException e) {
            log.error("Error saving cover image", e);
            throw new AppException(ErrorCode.CANT_CREATE_TOKEN);
        }

        // Create novel object and save to DB
        DNovel novel = new DNovel();
        novel.setTitle(title);
        novel.setAuthName(author);
        novel.setDescription(description);
        novel.setGenre(genreList);  // genres already converted to list
        novel.setPathToImage(destinationFile.getAbsolutePath()); // Save image path in DB

        try {
            novelService.createNovel(novel);
        } catch (AppException e) {
            log.error("Error creating novel in the database", e);
            throw new AppException(ErrorCode.USER_EXISTED);
        }

        apiResponse.setResult(novelMapper.DNovelToNovelDTO(novel));
        return ResponseEntity.ok(apiResponse);
    }

}
