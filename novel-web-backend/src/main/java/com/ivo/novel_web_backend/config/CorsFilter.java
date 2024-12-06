package com.ivo.novel_web_backend.config;


import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class CorsFilter implements Filter {

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
            throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) res;
        HttpServletRequest request = (HttpServletRequest) req;
        response.setHeader("Access-Control-Allow-Origin", "http://tuanthanh.site:4200");
        response.setHeader("Access-Control-Allow-Origin", "http://tuanthanh.site/");
        response.setHeader("Access-Control-Allow-Origin", "http://14.225.253.13");
        response.setHeader("Access-Control-Allow-Origin", "http://192.168.1.179:4200");
        response.setHeader("Access-Control-Allow-Origin", "http://14.225.253.13:4200");
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:4200"); // Chỉ cho phép domain cụ thể
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        response.setHeader("Access-Control-Allow-Credentials", "true");

        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
        } else {
            chain.doFilter(req, res);
        }
    }
}