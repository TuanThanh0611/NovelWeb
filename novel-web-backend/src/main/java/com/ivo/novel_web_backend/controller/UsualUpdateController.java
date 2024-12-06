package com.ivo.novel_web_backend.controller;

import com.ivo.novel_web_backend.service.UsualUpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usual-update")
@CrossOrigin(origins = {"http://localhost:4200", "http://tuanthanh.site"})

public class UsualUpdateController {
    @Autowired
    UsualUpdateService usualUpdateService;
    @PostMapping("/update-ranking")
    public ResponseEntity<String> updateRankingTop(){
        try{
            usualUpdateService.updateRankingTop();
            return ResponseEntity.ok("Update successful");
        }catch (Exception e){
            return ResponseEntity.ok("Update failed");
        }
    }
    @PostMapping("/update-chapternumber")
    public ResponseEntity<String> updateChapterNumber(){
        try{
            usualUpdateService.updateChapterNumber();
            return ResponseEntity.ok("Update successful");
        }catch (Exception e){
            return ResponseEntity.ok("Update failed");
        }
    }
}
