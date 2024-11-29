package com.ivo.novel_web_backend.repository;

import com.ivo.novel_web_backend.entity.Chapter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ChapterRepository extends JpaRepository<Chapter, Long> {
    Chapter findByPublicId(UUID publicId);

    void deleteByPublicId(UUID publicId);
    List<Chapter> findAllByNovelPublicIdOrderByChapterNumberDesc(UUID novelPublicId);
}
