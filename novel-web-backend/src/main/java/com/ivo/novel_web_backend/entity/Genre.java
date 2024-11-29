package com.ivo.novel_web_backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Data
@Table(name = "novel_genre")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
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
    @EqualsAndHashCode.Exclude
    @ManyToMany(mappedBy = "genres", fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
    @JsonIgnore// Liên kết với `genres` trong `Novel`
    private Set<Novel> novels = new HashSet<>();
    public Genre(String id) {
        this.publicId = UUID.fromString(id);
    }

}