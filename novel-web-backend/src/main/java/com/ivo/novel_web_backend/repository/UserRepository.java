package com.ivo.novel_web_backend.repository;

import com.ivo.novel_web_backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
    boolean existsByEmail(String email);
    Optional<User> findUsersByEmail(String email);
    User findUserByEmail(String email);
}