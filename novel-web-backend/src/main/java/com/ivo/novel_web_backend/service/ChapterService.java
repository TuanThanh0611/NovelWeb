package com.ivo.novel_web_backend.service;

import com.ivo.novel_web_backend.Exception.AppException;
import com.ivo.novel_web_backend.Exception.ErrorCode;
import com.ivo.novel_web_backend.dto.DGenre;
import com.ivo.novel_web_backend.dto.GenreDTO;
import com.ivo.novel_web_backend.entity.Chapter;
import com.ivo.novel_web_backend.mapper.GenreMapper;
import com.ivo.novel_web_backend.repository.ChapterRepository;
import com.ivo.novel_web_backend.repository.GenreRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class ChapterService {
    @Autowired
    private ChapterRepository chapterRepository;
    @Transactional
    public Chapter createChapter(Chapter chapter,UUID novelPublicId) {
        chapter.setPublicId(UUID.randomUUID());
        chapter.setPublishedDate(LocalDate.now());
        chapter.setNovelPublicId(novelPublicId);
        chapterRepository.save(chapter);
        return chapter;
    }
    @Transactional
    public UUID deleteChapter(UUID chapterId) {
       chapterRepository.deleteByPublicId(chapterId);
        return chapterId;
    }
    @Transactional
    public Chapter getChapterById(UUID novelChapterId,int chapterNumber) {
        List<Chapter> list=chapterRepository.findAllByNovelPublicIdOrderByChapterNumberDesc(novelChapterId);
        for(Chapter chapter:list){
            if(chapter.getChapterNumber()==chapterNumber){
                if(chapter.getNovelPublicId()==null){
                    throw new AppException(ErrorCode.CATCH_ERROR);
                }
                return chapter;
            }
        }
        return null;
    }
//    @Transactional
//    public List<DGenre> getAllGenres() {
//        if (genreRepository.count() == 0) {
//            throw new AppException(ErrorCode.CATCH_ERROR);
//        }
//        return genreMapper.GenreToDGenres(genreRepository.findAll());
//    }

}
