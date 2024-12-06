package com.ivo.novel_web_backend.service;

import com.ivo.novel_web_backend.entity.Chapter;
import com.ivo.novel_web_backend.entity.Novel;
import com.ivo.novel_web_backend.repository.NovelRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class UsualUpdateService {
    private final Random random = new Random();
    @Autowired
    private NovelRepository novelRepository;
    @Autowired
    private ChapterService chapterService;

    @Transactional
    public void updateRankingTop() {
        // Lấy tất cả các novel đã được sắp xếp giảm dần theo lượt views
        List<Novel> topViewList = novelRepository.findAllByOrderByViewsDesc();

        int ranking = 1; // Bắt đầu từ ranking 1
        for (Novel novel : topViewList) {
            // Cập nhật ranking cho mỗi novel
            novel.setRanking(ranking);
            ranking++; // Tăng ranking cho cuốn tiếp theo

            // Lưu lại sự thay đổi vào cơ sở dữ liệu
            novelRepository.save(novel);
        }
    }

    @Transactional
    public void updateChapterNumber() {
        List<Novel> novels=novelRepository.findAll();
        for (Novel novel : novels) {
            List<Chapter> chapterList=chapterService.getChapterListByNovelPublicId(novel.getPublicId());
            novel.setChapterNumber(random.nextInt(700 - 100 + 1) + 50);
            novel.setStatus("Đang tiến hành");
            novelRepository.save(novel);
        }
    }
}
