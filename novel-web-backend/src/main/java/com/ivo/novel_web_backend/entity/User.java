package com.ivo.novel_web_backend.entity;


import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.Instant;
import java.time.LocalDate;
import java.util.Map;
import java.util.Set;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@FieldDefaults(level= AccessLevel.PRIVATE)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;
    String username;
    String email;
    String phoneNumber;
    String password;
    String imageUrl;
    LocalDate dob;
    Instant createdDate;
    Instant lastModifiedDate;
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "role")
    private Set<String> roles;
    public static User fromTokenClaims(Map<String, Object> claims, Set<String> rolesFromToken) {
        User user = new User();

        user.setId((String) claims.get("id"));
        user.setUsername((String) claims.get("username"));
        user.setEmail((String) claims.get("email"));

        // Trích xuất createdDate từ claims và chuyển đổi từ epoch giây sang Instant
        Object createdDateObj = claims.get("createdDate");
        if (createdDateObj != null && createdDateObj instanceof Long) {
            user.setCreatedDate(Instant.ofEpochSecond((Long) createdDateObj));
        }

        // Gán vai trò từ danh sách rolesFromToken
        user.setRoles(rolesFromToken);

        return user;
    }
}