package com.ivo.novel_web_backend.dto;

import jakarta.validation.constraints.NotNull;

import java.util.Objects;

public record PictureDTO(
        @NotNull byte[] file,
        @NotNull String fileContentType
) {


    @Override
    public int hashCode() {
        return Objects.hash(fileContentType);
    }

    @Override
    public String toString() {
        return "PictureDTO{" +
                "fileContentType='" + fileContentType + '\'' +
                '}';
    }
}