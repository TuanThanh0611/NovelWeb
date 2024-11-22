package com.ivo.novel_web_backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ivo.novel_web_backend.entity.Genre;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.util.List;
import java.util.UUID;
@Data
@NoArgsConstructor()
@AllArgsConstructor()
@FieldDefaults(level= AccessLevel.PRIVATE)
public class NovelDTO {
    @JsonProperty("title")
    private String title;

    @JsonProperty("publicId")
    private UUID publicId;

    @JsonProperty("authName")
    private String authName;

    @JsonProperty("description")
    private String description;

    @JsonProperty("nameofpicture")
    private String nameofpicture;

    @JsonProperty("genre")
    private List<Genre> genre;
}
