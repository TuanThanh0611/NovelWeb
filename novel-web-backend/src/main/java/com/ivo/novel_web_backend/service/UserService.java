package com.ivo.novel_web_backend.service;

import com.ivo.novel_web_backend.Exception.AppException;
import com.ivo.novel_web_backend.Exception.ErrorCode;
import com.ivo.novel_web_backend.dto.request.UserUpdateRequest;
import com.ivo.novel_web_backend.dto.response.UserResponse;
import com.ivo.novel_web_backend.entity.User;
import com.ivo.novel_web_backend.mapper.UserMapper;
import com.ivo.novel_web_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    UserMapper mapper;
    public UserResponse updateUser(String userId, UserUpdateRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXISTED));

        mapper.updateUser(user, request);

        return mapper.toUserResponse(userRepository.save(user));
    }
}
