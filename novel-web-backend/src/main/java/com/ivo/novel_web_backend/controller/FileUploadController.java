package com.ivo.novel_web_backend.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Map;

import static org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")


public class FileUploadController {

    @PostMapping(value = "simple-form-upload-mvc", consumes = MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Map<String, String>> handleFileUploadForm(@RequestPart("file") MultipartFile file) {
        log.info("Handling request parts: {}", file);

        try {
            // Đường dẫn đến thư mục 'images'
            Path resourceFolder = Paths.get("src/main/resources/images");

            // Tạo thư mục nếu chưa tồn tại
            if (!Files.exists(resourceFolder)) {
                Files.createDirectories(resourceFolder);
                log.info("Created directory: {}", resourceFolder.toAbsolutePath());
            }

            // Lưu file vào thư mục 'images'
            Path filePath = resourceFolder.resolve(file.getOriginalFilename());
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
            log.info("File saved at: {}", filePath.toAbsolutePath());

            // Tạo URI trả về
            String fileUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path("/images/")
                    .path(file.getOriginalFilename())
                    .toUriString();

            var result = Map.of(
                    "filename", file.getOriginalFilename(),
                    "fileUri", fileUri
            );
            return ok().body(result);

        } catch (IOException e) {
            log.error("Error while uploading file: {}", e.getMessage(), e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    }