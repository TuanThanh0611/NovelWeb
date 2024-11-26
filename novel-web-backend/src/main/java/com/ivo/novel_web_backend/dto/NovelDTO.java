package com.ivo.novel_web_backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ivo.novel_web_backend.entity.Genre;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;
@Data
@NoArgsConstructor()
@AllArgsConstructor()
@FieldDefaults(level= AccessLevel.PRIVATE)
public class NovelDTO {

    private String title;

    private UUID publicId;

    private String authName;

    private String description;

    private List<GenreDTO> genre;

}
