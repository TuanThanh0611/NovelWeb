package com.ivo.novel_web_backend.mapper;

import com.ivo.novel_web_backend.dto.DNovel;
import com.ivo.novel_web_backend.dto.NovelDTO;
import com.ivo.novel_web_backend.entity.Novel;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface NovelMapper {
    Novel DNovelToNovel(DNovel novel);
    DNovel NovelToDNovel(Novel novel);
    NovelDTO DNovelToNovelDTO(DNovel novel);
    DNovel NovelDTOToDNovel(NovelDTO novelDTO);
    List<DNovel> NovelListToDNovelList(List<Novel> novelList);
    List<NovelDTO> DNovelListToNovelDTOList(List<DNovel> novelList);

    Novel NovelDTOToNovel(NovelDTO novelDTO);
    NovelDTO NovelToNovelDTO(Novel novel);
    List<NovelDTO> NovelListToNovelDTOList(List<Novel> novelList);
 }
