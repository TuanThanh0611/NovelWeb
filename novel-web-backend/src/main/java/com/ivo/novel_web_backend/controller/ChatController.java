package com.ivo.novel_web_backend.controller;

import com.ivo.novel_web_backend.entity.ChatMessage;
import com.ivo.novel_web_backend.repository.ChatMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = {"http://localhost:4200", "http://tuanthanh.site"})
@Controller
public class ChatController {

    @MessageMapping("/sendMessage")
    @SendTo("/topic/messages")
    public String processMessage(String message) {
        return message; // Có thể xử lý thêm trước khi gửi
    }
}