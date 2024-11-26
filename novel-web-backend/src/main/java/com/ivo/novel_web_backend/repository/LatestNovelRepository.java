package com.ivo.novel_web_backend.repository;

import com.ivo.novel_web_backend.entity.LatestNovel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LatestNovelRepository extends JpaRepository<LatestNovel,Long> {
}
