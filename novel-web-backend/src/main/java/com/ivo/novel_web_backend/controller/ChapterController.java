package com.ivo.novel_web_backend.controller;

import com.ivo.novel_web_backend.dto.ChapterDTO;
import com.ivo.novel_web_backend.entity.Chapter;
import com.ivo.novel_web_backend.mapper.ChapterMapper;
import com.ivo.novel_web_backend.service.ChapterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/chapter")
public class ChapterController {
    @Autowired
    private ChapterService chapterService;
    @Autowired
    private ChapterMapper chapterMapper;

    @PostMapping(value = "/{novelPublicId}", consumes = "application/json", produces = "application/json")
    public ResponseEntity<ChapterDTO> addChapter(
            @PathVariable UUID novelPublicId,
            @RequestBody ChapterDTO chapter
    ) {
        chapterService.createChapter(chapterMapper.ChapterDTOToChapter(chapter),novelPublicId);
        return ResponseEntity.ok(chapter);
    }
    @GetMapping("/get-chapter")
    public ResponseEntity<ChapterDTO> getChapter(@RequestParam  UUID novelPublicId,@RequestParam int chapterNumber) {
        ChapterDTO out=chapterMapper.ChapterToChapterDTO(chapterService.getChapterById(novelPublicId,chapterNumber));
        out.setNovelPublicId(novelPublicId);
      return ResponseEntity.ok( out);
    }

}
