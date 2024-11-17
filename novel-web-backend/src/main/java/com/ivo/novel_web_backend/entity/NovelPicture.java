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

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "novel_fk", referencedColumnName = "id")
    private Novel novel;

    @Lob
    @Column(name = "file", nullable = false)
    private byte[] file;

    @Column(name = "file_content_type")
    private String fileContentType;

}