package com.ivo.novel_web_backend.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.ivo.novel_web_backend.entity.Genre;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GenreDTO {
    private String name;

    private UUID publicId;

    public GenreDTO(UUID id, String name) {
        this.publicId = id;
        this.name = name;
    }
    public GenreDTO(String name) {
        this.name = name;
        this.publicId = null;
    }

    // Constructor chấp nhận UUID
    public GenreDTO(UUID publicId) {
        this.publicId = publicId;
    }
}