package com.ivo.novel_web_backend.mapper;

import com.ivo.novel_web_backend.dto.ChapterDTO;
import com.ivo.novel_web_backend.entity.Chapter;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ChapterMapper {
    Chapter ChapterDTOToChapter(ChapterDTO chapterDTO) ;
    ChapterDTO ChapterToChapterDTO(Chapter chapter);
}
