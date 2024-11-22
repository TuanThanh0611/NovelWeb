package com.ivo.novel_web_backend.repository;

import com.ivo.novel_web_backend.entity.Genre;
import com.ivo.novel_web_backend.entity.Novel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NovelRepository extends JpaRepository<Novel, Long> {
    boolean existsByTitle(String title);
    void deleteByGenresContaining(Genre genre);}
