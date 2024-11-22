package com.ivo.novel_web_backend.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
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
    @JsonCreator
    public GenreDTO(@JsonProperty("name") String name) {
        this.name = name;
    }
}