package com.ivo.novel_web_backend.entity;


import jakarta.persistence.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

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

    @Column(name = "title")
    private String title;

    @Column(name="auth_name")
    private String authName;

    @Column(name="ranking")
    private int ranking;

    @Column(name="start")
    private double start;

    @Column(name = "description")
    private String description;

    @Column(name = "views")
    private int views;
    @Column(name="chapter_number")
    private int chapterNumber;


    @ManyToMany
    @JoinTable(
            name = "novel_genre_mapping",
            joinColumns = @JoinColumn(name = "novel_id"),
            inverseJoinColumns = @JoinColumn(name = "genre_id")
    )
    private Set<Genre> genres = new HashSet<>();



    @OneToOne(mappedBy = "novel", cascade = CascadeType.ALL, orphanRemoval = true)
    private NovelPicture novelPicture;}
