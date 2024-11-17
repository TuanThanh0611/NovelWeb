package com.ivo.novel_web_backend.dto.response;

import com.ivo.novel_web_backend.dto.PictureDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DisplayCardNovel {
    private String title;
    private String chapterNumber;
    private PictureDTO picture;
    private UUID publicId;
    private int ranking;
    private double start;
}
