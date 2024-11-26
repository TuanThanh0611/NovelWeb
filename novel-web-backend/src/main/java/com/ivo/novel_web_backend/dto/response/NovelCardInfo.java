package com.ivo.novel_web_backend.dto.response;

import com.ivo.novel_web_backend.Enums.Status;
import com.ivo.novel_web_backend.dto.GenreDTO;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level= AccessLevel.PRIVATE)
public class NovelCardInfo {
    private String title;

    private int ranking;

    private Double rating;

    private UUID publicId;

    private int chapterNumber;

    private String cover;
}
