package com.ivo.novel_web_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDate;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "chapter")
public class Chapter {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "chapterSequenceGenerator")
    @SequenceGenerator(name = "chapterSequenceGenerator", sequenceName = "chapter_generator", allocationSize = 1)
    @Column(name = "id")
    private Long id;

    @Column(name = "public_id", unique = true)
    private UUID publicId;

    @Column(name = "title")
    private String title;

    @Column(name = "content", length = 4000)
    private String content;

    @Column(name = "chapter_number" )
    private int chapterNumber;

    @Column(name = "published_date")
    private LocalDate publishedDate;

    @Column(name = "novel_publicid")
    private UUID novelPublicId;

}