package com.ivo.novel_web_backend.dto.request;

import com.ivo.novel_web_backend.dto.PictureDTO;
import com.ivo.novel_web_backend.entity.Genre;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UuidGenerator;

import java.util.List;
import java.util.UUID;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaveNovelDTO {

    private String title;

    private String authName;

    @Column(name = "description")
    private String description;

    private PictureDTO picture;

    private List<Genre> genre;


}
