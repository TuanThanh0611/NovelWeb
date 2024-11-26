package com.ivo.novel_web_backend.controller;

import com.ivo.novel_web_backend.Enums.Status;
import com.ivo.novel_web_backend.dto.NovelDTO;
import com.ivo.novel_web_backend.entity.Genre;
import com.ivo.novel_web_backend.entity.LatestNovel;
import com.ivo.novel_web_backend.entity.Novel;
import com.ivo.novel_web_backend.service.LastestNovelService;
import com.ivo.novel_web_backend.service.NovelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/novel")
public class NovelController {
   @Autowired
   NovelService novelService;
   @Autowired
    LastestNovelService lastestNovelService;


    @GetMapping("/{publicId}")
    public ResponseEntity<NovelDTO> getNovel(@PathVariable UUID publicId) {
        return ResponseEntity.ok(novelService.getNovelById(publicId));
    }
    @PostMapping("/update-latest")
    public ResponseEntity<String> updateLatest() {
        try{
        lastestNovelService.updateLatestNovel();
        return ResponseEntity.ok("Updated latest novel successfully");
    }
    catch (Exception e){
        return ResponseEntity.ok("Error while updating latest novel");}
    }
    @GetMapping("/get-12latest")
    public ResponseEntity<List<LatestNovel>> get12Latest() {
        return ResponseEntity.ok(lastestNovelService.getAllLatestNovels());
    }
}
