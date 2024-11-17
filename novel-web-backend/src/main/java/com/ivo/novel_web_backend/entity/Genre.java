package com.ivo.novel_web_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;
import java.util.UUID;

@Entity
@Data
@Table(name = "novel_genre")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Genre {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "genreSequence")
    @SequenceGenerator(name = "genreSequence", sequenceName = "novel_genre_sequence", allocationSize = 1)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "public_id", unique = true, nullable = false)
    private UUID publicId;

    @ManyToMany(mappedBy = "genres")
    private Set<Novel> novels;
}