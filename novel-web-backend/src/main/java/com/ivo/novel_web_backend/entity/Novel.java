package com.ivo.novel_web_backend.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ivo.novel_web_backend.Enums.Status;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;
@Data
@Entity
@Table(name = "novel")
public class Novel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "novelSequenceGenerator")
    @SequenceGenerator(name = "novelSequenceGenerator", sequenceName = "novel_generator", allocationSize = 1)
    @Column(name = "id")
    private Long id;

    @UuidGenerator
    @Column(name = "public_id", nullable = false)
    private UUID publicId;

    @Column(name = "title",nullable = false, unique = true)
    private String title;
    @Column(name="subtitle")
    private String subtitle;
    @Column(name="auth_name")
    private String authName;

    @Column(name="ranking")
    private int ranking;

    @Column(name = "star")
    private Double star;  // Sử dụng Double thay vì double


    @Column(name = "description")
    private String description;

    @Column(name = "views")
    private int views;
    @Column(name="chapter_number")
    private int chapterNumber;
    @Column(name = "published_date")
    private LocalDate publishedDate;
    @Column(name="status")
    private Status status;
    @Column(name="summary")
    private String summary;
    @Column(name="cover")
    private String cover;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "novel_genre_mapping",
            joinColumns = @JoinColumn(name = "novel_id"),
            inverseJoinColumns = @JoinColumn(name = "genre_id")
    )
    private Set<Genre> genres = new HashSet<>();

    public void setGenres(Set<Genre> genres) {
        this.genres = genres;
    }
}
