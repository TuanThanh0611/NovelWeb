package com.ivo.novel_web_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "novel_picture")
public class NovelPicture {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "novelPictureSequenceGenerator")
    @SequenceGenerator(name = "novelPictureSequenceGenerator", sequenceName = "novel_picture_generator", allocationSize = 1)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;


    @Column(name = "file_content_type")
    private String fileContentType;

}