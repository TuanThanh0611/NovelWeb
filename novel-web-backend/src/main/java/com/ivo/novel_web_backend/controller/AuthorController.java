package com.ivo.novel_web_backend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ivo.novel_web_backend.Exception.AppException;
import com.ivo.novel_web_backend.Exception.ErrorCode;
import com.ivo.novel_web_backend.dto.DGenre;
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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


@CrossOrigin(origins = {"http://localhost:4200", "http://tuanthanh.site"})

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
    public ResponseEntity<ApiResponse<NovelDTO>> save(@RequestBody NovelDTO request) {
        ApiResponse<NovelDTO> apiResponse =new ApiResponse<>();
        apiResponse.setResult((novelService.createNovel(request)));
        return ResponseEntity.ok(apiResponse);
    }
    @GetMapping("/getalls")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<NovelDTO> getAllNovels() {
        return (novelService.getAllNovels());
    }


    @DeleteMapping("/{publicId}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable UUID publicId) {
        ApiResponse<Void> apiResponse = new ApiResponse<>();

        if (publicId == null) {
            apiResponse.setMessage("Delete novel failed. Invalid ID.");
            return ResponseEntity.badRequest().body(apiResponse);
        }

        try {
            novelService.deleteNovel(publicId);
            apiResponse.setMessage("Delete novel successful");
            return ResponseEntity.ok(apiResponse);
        } catch (Exception e) {
            apiResponse.setMessage("Delete novel failed. " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(apiResponse);
        }
    }
}
