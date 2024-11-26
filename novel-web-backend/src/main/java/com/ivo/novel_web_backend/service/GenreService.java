package com.ivo.novel_web_backend.service;

import com.ivo.novel_web_backend.Exception.AppException;
import com.ivo.novel_web_backend.Exception.ErrorCode;
import com.ivo.novel_web_backend.dto.DGenre;
import com.ivo.novel_web_backend.dto.GenreDTO;
import com.ivo.novel_web_backend.entity.Genre;
import com.ivo.novel_web_backend.mapper.GenreMapper;
import com.ivo.novel_web_backend.repository.GenreRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class GenreService {
    @Autowired
    private GenreRepository genreRepository;
    @Autowired
    private GenreMapper genreMapper;
    @Transactional
    public GenreDTO createGenre(GenreDTO genre) {
        genre.setPublicId(UUID.randomUUID());
        genreRepository.save(genreMapper.GenreDTOToGenre(genre));
        return genre;
    }
    @Transactional
    public UUID deleteGenre(UUID genreId) {
        genreRepository.deleteByPublicId(genreId);
        return genreId;
    }
    @Transactional
    public List<DGenre> getAllGenres() {
        if (genreRepository.count() == 0) {
            throw new AppException(ErrorCode.CATCH_ERROR);
        }
        return genreMapper.GenreToDGenres(genreRepository.findAll());
    }

}
