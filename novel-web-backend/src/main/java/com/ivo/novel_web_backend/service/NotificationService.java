package com.ivo.novel_web_backend.service;

import com.ivo.novel_web_backend.Exception.AppException;
import com.ivo.novel_web_backend.Exception.ErrorCode;
import lombok.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class NotificationService {
    private final RestTemplate restTemplate;
    private String pythonServiceUrl="http://localhost:8000";

    public NotificationService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public void sendWelcomeEmail(String email, String username) {
        String url = pythonServiceUrl + "/send-email";

        Map<String, String> payload = new HashMap<>();
        payload.put("email", email);
        payload.put("username", username);

        try {
            restTemplate.postForEntity(url, payload, Void.class);
        } catch (Exception e) {
            throw new AppException(ErrorCode.CATCH_ERROR );
        }
    }
}
