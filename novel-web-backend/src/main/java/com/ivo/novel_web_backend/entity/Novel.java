package com.ivo.novel_web_backend.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ivo.novel_web_backend.Enums.Status;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
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


    @Column(name = "public_id")
    private UUID publicId;

    @Column(name = "title",nullable = false, unique = true)
    private String title;
    @Column(name="subtitle")
    private String subtitle;
    @Column(name="auth_name")
    private String authName;

    @Column(name="ranking")
    private int ranking;

    @Column(name = "rating")
    private Double rating;  // Sử dụng Double thay vì double

    @Column(name = "description",length = 5000)
    private String description;

    @Column(name = "views")
    private int views;
    @Column(name="chapter_number")
    private int chapterNumber;
    @Column(name = "published_date")
    private LocalDate publishedDate;
    @Column(name="status")
    private String status;
    @Column(name="cover")
    private String cover;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "novel_genre_mapping",
            joinColumns = @JoinColumn(name = "novel_id"),
            inverseJoinColumns = @JoinColumn(name = "genre_id")
    )
    @EqualsAndHashCode.Exclude
    private Set<Genre> genres = new HashSet<>();
    @OneToMany
    private Set<Chapter> chapters = new HashSet<>();


    public void setGenres(Set<Genre> genres) {
        this.genres = genres;
    }
}
