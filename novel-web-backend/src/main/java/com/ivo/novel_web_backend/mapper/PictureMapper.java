package com.ivo.novel_web_backend.mapper;

import com.ivo.novel_web_backend.dto.PictureDTO;
import com.ivo.novel_web_backend.entity.NovelPicture;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PictureMapper {
    NovelPicture pictureDTOtoNovelPicture(PictureDTO pictureDTO);
    PictureDTO novelPictureToPictureDTO(NovelPicture novelPicture);
}
