package com.ivo.novel_web_backend.controller;


import com.ivo.novel_web_backend.dto.DGenre;
import com.ivo.novel_web_backend.dto.GenreDTO;
import com.ivo.novel_web_backend.dto.response.ApiResponse;
import com.ivo.novel_web_backend.mapper.GenreMapper;
import com.ivo.novel_web_backend.service.GenreService;
import com.ivo.novel_web_backend.service.NovelService;
import com.ivo.novel_web_backend.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/genres")
public class GenreController {
    private static final Logger log = LoggerFactory.getLogger(GenreController.class);
    public static final String ADMIN = "ADMIN";
    @Autowired
    private GenreService genreService;
    @Autowired
    private GenreMapper genreMapper;
    @Autowired
    private UserService userService;
    @Autowired
    private NovelService novelService;
    @PostMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<ApiResponse<GenreDTO>> save(@RequestBody GenreDTO request) {
        ApiResponse<GenreDTO> apiResponse =new ApiResponse<>();
        genreService.createGenre(request);
        apiResponse.setResult(request);
        return ResponseEntity.ok(apiResponse);
    }
    @GetMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public List<GenreDTO> getAllCategories() {
        return genreMapper.DGenreListToGenreDTOList(genreService.getAllGenres());
    }

    @DeleteMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<ApiResponse<Void>> delete(@RequestBody UUID publicId) {
        ApiResponse<Void> apiResponse =new ApiResponse<>();
        if (publicId == null) {
            apiResponse.setMessage("Delete genre failed");
            return ResponseEntity.badRequest().body(apiResponse);
        }
        try {
            novelService.deleteNovelByGenre(publicId);
            genreService.deleteGenre(publicId);
            apiResponse.setMessage("Delete genre successful");
            return ResponseEntity.ok(apiResponse);
        } catch (Exception e) {
            apiResponse.setMessage("Delete genre failed: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(apiResponse);
        }
    }



}
