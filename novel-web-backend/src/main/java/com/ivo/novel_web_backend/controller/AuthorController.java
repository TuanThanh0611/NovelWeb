package com.ivo.novel_web_backend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/author")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AuthorController {
    @Autowired
    NovelService novelService;
    @Autowired
    AuthorService authorService;
    @Autowired
    NovelMapper novelMapper;

    @PostMapping("/create-novel")
    public ResponseEntity<ApiResponse<NovelDTO>> save(@RequestBody NovelDTO request) {
        ApiResponse<NovelDTO> apiResponse =new ApiResponse<>();

        DNovel novel = novelMapper.NovelDTOToDNovel(request);
        try{
        novelService.createNovel(novel);}
        catch (AppException e){
            throw new AppException(ErrorCode.CATCH_ERROR);
        }
        apiResponse.setResult(novelMapper.DNovelToNovelDTO(novel));
        if(novel.getTitle()==null){
            throw new AppException(ErrorCode.CATCH_ERROR);
        }
        return ResponseEntity.ok(apiResponse);
    }

    @PostMapping("/upload-picture")
    public ResponseEntity<ApiResponse<String>> uploadPicture(@RequestParam("file") MultipartFile file) {
        ApiResponse<String> apiResponse = new ApiResponse<>();

        if (file.isEmpty()) {
            throw new AppException(ErrorCode.CATCH_ERROR);
        }

        // Lưu tệp ảnh vào thư mục server và trả về tên file
        String fileName = null;
        try {
            fileName = novelService.saveFile(file);  // Gọi service để lưu tệp
        } catch (IOException e) {
            throw new AppException(ErrorCode.CATCH_ERROR);
        }

        apiResponse.setResult(fileName);  // Trả về tên tệp đã lưu
        return ResponseEntity.ok(apiResponse);
    }

}
