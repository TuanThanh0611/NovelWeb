package com.ivo.novel_web_backend.service;

import com.ivo.novel_web_backend.Exception.AppException;
import com.ivo.novel_web_backend.Exception.ErrorCode;
import com.ivo.novel_web_backend.entity.LatestNovel;
import com.ivo.novel_web_backend.repository.LatestNovelRepository;
import com.ivo.novel_web_backend.repository.NovelRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ivo.novel_web_backend.entity.Novel;

import java.util.List;

@Service
public class LastestNovelService {
    @Autowired
    private LatestNovelRepository latestNovelRepository;
    @Autowired
    private NovelRepository novelRepository;
    @Transactional
    public void updateLatestNovel() {
        List<Novel> latestNovels=novelRepository.findTop12ByOrderByPublishedDateDesc();
        if(latestNovels.size()==0){
            throw new AppException(ErrorCode.CATCH_ERROR);
        }
        latestNovelRepository.deleteAll();
        latestNovels.forEach(novel -> {
            LatestNovel latestNovel = new LatestNovel();
            latestNovel.setPublicId(novel.getPublicId());
            latestNovel.setTitle(novel.getTitle());
            latestNovel.setCover(novel.getCover());
            latestNovel.setChapterNumber(novel.getChapterNumber());
            latestNovel.setRanking(novel.getRanking());
            latestNovel.setRating(novel.getRating());
            latestNovel.setPublishedDate(novel.getPublishedDate());

            latestNovelRepository.save(latestNovel);
        });
    }
    @Transactional
    public List<LatestNovel> getAllLatestNovels() {
        return latestNovelRepository.findAll();
    }
}
