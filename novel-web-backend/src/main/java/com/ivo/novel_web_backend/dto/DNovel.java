package com.ivo.novel_web_backend.dto;

import com.ivo.novel_web_backend.entity.Genre;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.util.List;
import java.util.UUID;
@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level= AccessLevel.PRIVATE)
public class DNovel{
    UUID publicId;

    String title;

    String authName;

    String description;

    List<Genre> genre;
}
