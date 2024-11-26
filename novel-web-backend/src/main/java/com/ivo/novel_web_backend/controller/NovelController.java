package com.ivo.novel_web_backend.controller;

import com.ivo.novel_web_backend.Enums.Status;
import com.ivo.novel_web_backend.entity.Genre;
import com.ivo.novel_web_backend.entity.Novel;
import com.ivo.novel_web_backend.service.NovelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/novel")
public class NovelController {
   @Autowired
   NovelService novelService;


    @GetMapping("/{publicId}")
    public ResponseEntity<Novel> getNovel(@PathVariable UUID publicId) {
        return ResponseEntity.ok(novelService.getNovelById(publicId));
    }
}
