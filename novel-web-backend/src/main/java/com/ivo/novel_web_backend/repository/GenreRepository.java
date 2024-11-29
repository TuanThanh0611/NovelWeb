package com.ivo.novel_web_backend.repository;

import com.ivo.novel_web_backend.entity.Genre;
import jdk.jfr.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface GenreRepository extends JpaRepository<Genre,Long> {
    Genre findByPublicId(UUID publicId);
    void deleteByPublicId(UUID publicId);
    Optional<Genre> findByName(String name);
    Boolean existsGenresByName(String name);
    Genre findGenreByPublicId(UUID publicId);
}
