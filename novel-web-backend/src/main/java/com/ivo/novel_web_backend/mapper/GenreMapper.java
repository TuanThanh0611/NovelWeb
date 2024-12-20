package com.ivo.novel_web_backend.mapper;
import com.ivo.novel_web_backend.dto.DGenre;
import com.ivo.novel_web_backend.dto.GenreDTO;
import com.ivo.novel_web_backend.entity.Genre;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.Set;

@Mapper(componentModel = "spring")
public interface GenreMapper {
    Genre DGenreToGenre(DGenre genre);
    List<DGenre> GenreToDGenres(List<Genre> genres);
    DGenre GenreDTOToDGenre(GenreDTO genre);
    GenreDTO DGenreToGenreDTO(DGenre genre);
    List<GenreDTO> DGenreListToGenreDTOList(List<DGenre> genres);
    List<DGenre> GenreDTOListToDGenreList(List<GenreDTO> genres);
    List<Genre> DGenreListToGenreList(List<DGenre> genres);

    Set<Genre> GenreDTOListToGenreSet(List<GenreDTO> genres);
    List<GenreDTO> GenreSetToGenreDTOList(Set<Genre> genres);
    Genre GenreDTOToGenre(GenreDTO genre);
    GenreDTO GenreDTOToGenreDTO(Genre genre);

}
