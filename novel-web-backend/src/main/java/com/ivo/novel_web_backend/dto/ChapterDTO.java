package com.ivo.novel_web_backend.dto;

import com.ivo.novel_web_backend.entity.Novel;
import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.UUID;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChapterDTO {
    private UUID publicId;

    private String title;

    private String content;

    private int chapterNumber;

    private LocalDate publishedDate;


    private UUID novelPublicId;
}
