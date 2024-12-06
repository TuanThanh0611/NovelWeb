package com.ivo.novel_web_backend.controller;

import com.ivo.novel_web_backend.dto.ChapterDTO;
import com.ivo.novel_web_backend.entity.Chapter;
import com.ivo.novel_web_backend.mapper.ChapterMapper;
import com.ivo.novel_web_backend.service.ChapterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://tuanthanh.site"})

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
    @GetMapping("/get-chapter-list")
    public ResponseEntity<List<ChapterDTO>> getChapterList(@RequestParam UUID novelPublicId) {
        // Lấy danh sách tất cả chapters từ dịch vụ
        List<Chapter> chapters = chapterService.getChapterListByNovelPublicId(novelPublicId);

        // Chuyển đổi danh sách Chapter sang danh sách ChapterDTO bằng vòng lặp for
        List<ChapterDTO> chapterDTOs = new ArrayList<>();
        for (Chapter chapter : chapters) {
            ChapterDTO chapterDTO = chapterMapper.ChapterToChapterDTO(chapter);
            chapterDTO.setNovelPublicId(novelPublicId);
            chapterDTOs.add(chapterDTO);
        }

        // Trả về danh sách chapters
        return ResponseEntity.ok(chapterDTOs);
    }


}
