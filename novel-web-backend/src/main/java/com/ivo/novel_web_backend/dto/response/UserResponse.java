package com.ivo.novel_web_backend.dto.response;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.Instant;
import java.time.LocalDate;
import java.util.Set;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
@FieldDefaults(level= AccessLevel.PRIVATE)
public class UserResponse {
    String id;
    String email;
    String username;
    LocalDate dob;
    String phoneNumber;
    String imageUrl;
    Instant createdDate;
    Long dbId;
    Set<String> roles;

}