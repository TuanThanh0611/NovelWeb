package com.ivo.novel_web_backend.repository;

import com.ivo.novel_web_backend.entity.Genre;
import com.ivo.novel_web_backend.entity.Novel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface NovelRepository extends JpaRepository<Novel, Long> {
    boolean existsByTitle(String title);
    void deleteByGenresContaining(Genre genre);
    void deleteByPublicId(UUID publicId);
    Novel findByPublicId(UUID publicId);
    List<Novel> findTop12ByOrderByPublishedDateDesc();

}
