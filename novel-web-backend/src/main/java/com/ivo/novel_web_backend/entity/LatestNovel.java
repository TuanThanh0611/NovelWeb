package com.ivo.novel_web_backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@Table(name="latest_novels")
public class LatestNovel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "public_id")
    private UUID publicId;

    @Column(name = "title",nullable = false, unique = true)
    private String title;
    @Column(name="cover")
    private String cover;
    @Column(name="chapter_number")
    private int chapterNumber;
    @Column(name = "ranking")
    private int ranking;
    @Column(name = "rating")
    private Double rating;

    @Column(name = "published_date")
    private LocalDate publishedDate;

}
