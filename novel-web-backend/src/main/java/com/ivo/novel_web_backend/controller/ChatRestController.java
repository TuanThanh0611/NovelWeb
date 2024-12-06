package com.ivo.novel_web_backend.controller;

import com.ivo.novel_web_backend.entity.ChatMessage;
import com.ivo.novel_web_backend.repository.ChatMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
@CrossOrigin(origins = {"http://localhost:4200", "http://tuanthanh.site"})

@RestController
public class ChatRestController {

    @Autowired
    private ChatMessageRepository chatMessageRepository;

    @GetMapping("/api/messages")
    public List<ChatMessage> getMessages() {
        return chatMessageRepository.findAll();
    }
}
