package com.ivo.novel_web_backend.service;

import com.ivo.novel_web_backend.dto.PictureDTO;
import com.ivo.novel_web_backend.entity.Novel;
import com.ivo.novel_web_backend.entity.NovelPicture;
import com.ivo.novel_web_backend.mapper.PictureMapper;
import com.ivo.novel_web_backend.repository.NovelPictureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PictureService {
    @Autowired
    NovelPictureRepository novelPictureRepository;
    @Autowired
    PictureMapper pictureMapper;
    public PictureDTO save(PictureDTO pictureDTO, Novel novel) {
        NovelPicture novelPicture = pictureMapper.pictureDTOtoNovelPicture(pictureDTO);
        novelPicture.setNovel(novel);
        novelPictureRepository.save(novelPicture);
        return pictureMapper.novelPictureToPictureDTO(novelPicture);
    }

}
