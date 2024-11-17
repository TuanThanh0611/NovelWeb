package com.ivo.novel_web_backend.repository;

import com.ivo.novel_web_backend.entity.NovelPicture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NovelPictureRepository extends JpaRepository<NovelPicture, Long> {
}
