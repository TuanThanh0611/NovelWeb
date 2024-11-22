package com.ivo.novel_web_backend.mapper;

import com.ivo.novel_web_backend.dto.DNovel;
import com.ivo.novel_web_backend.dto.NovelDTO;
import com.ivo.novel_web_backend.entity.Novel;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface NovelMapper {
    Novel DNovelToNovel(DNovel novel);
    DNovel NovelToDNovel(Novel novel);
    NovelDTO DNovelToNovelDTO(DNovel novel);
    DNovel NovelDTOToDNovel(NovelDTO novelDTO);
}
