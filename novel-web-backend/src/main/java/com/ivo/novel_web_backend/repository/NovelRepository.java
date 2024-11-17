package com.ivo.novel_web_backend.repository;

import com.ivo.novel_web_backend.entity.Novel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NovelRepository extends JpaRepository<Novel, Long> {
}
