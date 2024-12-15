package com.ivo.novel_web_backend.service;


import com.ivo.novel_web_backend.Enums.Role;
import com.ivo.novel_web_backend.Exception.AppException;
import com.ivo.novel_web_backend.Exception.ErrorCode;
import com.ivo.novel_web_backend.dto.request.*;
import com.ivo.novel_web_backend.dto.response.AuthenticationResponse;
import com.ivo.novel_web_backend.dto.response.IntrospectResponse;
import com.ivo.novel_web_backend.dto.response.UserResponse;
import com.ivo.novel_web_backend.entity.User;
import com.ivo.novel_web_backend.mapper.UserMapper;
import com.ivo.novel_web_backend.repository.UserRepository;
import com.nimbusds.jose.JOSEException;
import com.nimbusds.jose.JWSVerifier;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.SignedJWT;
import jakarta.transaction.Transactional;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.time.Instant;
import java.util.Date;
import java.util.HashSet;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(level= AccessLevel.PRIVATE,makeFinal = true)
public class AuthService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    UserMapper mapper;
    PasswordEncoder passwordEncoder;
    protected String SIGNER_KEY = "Hvj3OStJfA9Ze823YyodKyYSJ33T555IRYFs2yIOcPLiP10J8pMj1wfy8zi2ZWAw";
    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    NotificationService notificationService;
    @Autowired
    UserSynchronizer userSynchronizer;

    @Transactional
    public UserResponse registerUser(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new AppException(ErrorCode.USER_EXISTED);
        }
        User user = mapper.registerRequestToUser(request);

        user.setPassword(passwordEncoder.encode(request.getPassword()));

        HashSet<String> roles = new HashSet<>();
        roles.add(Role.USER.name());

        user.setRoles(roles);
        user.setUsername("user#"+ UUID.randomUUID().toString());
        user.setCreatedDate(Instant.now());
        notificationService.sendWelcomeEmail(user.getEmail(), user.getUsername());
        return mapper.toUserResponse(userRepository.save(user));
    }

    @Transactional
    public UserResponse updateUser(UserUpdateRequest request) {
        User user = userRepository.findUsersByEmail(request.getEmail())
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXISTED));
        user.setUsername(request.getUsername());
        user.setDob(request.getDob());
        user.setPhoneNumber(request.getPhoneNumber());
        user.setImageUrl(request.getImageUrl());


        return mapper.toUserResponse(userRepository.save(user));
    }
    @Transactional
    public UserResponse updatePassword(UpdatePasswordRequest request){
        User user=userRepository.findUserByEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        return mapper.toUserResponse(userRepository.save(user));
    }

    @Transactional
    public User getAuthenticatedUserWithSync(String jwtToken, boolean forceResync) {
        try {
            userSynchronizer.syncWithDatabase(jwtToken, forceResync);

            return userRepository.findUsersByEmail(jwtUtils.extractEmailFromToken(jwtToken))
                    .orElseThrow(() -> new RuntimeException("User not found"));
        } catch (Exception e) {
            e.printStackTrace(); // Ghi log chi tiết lỗi
            throw new RuntimeException("Lỗi khi lấy người dùng đã xác thực", e);
        }
    }

    @Transactional
    public User getAuthenticatedUser(String jwtToken) {
        try {
            return userRepository.findUsersByEmail(jwtUtils.extractEmailFromToken(jwtToken))
                    .orElseThrow(() -> new RuntimeException("User not found"));
        } catch (Exception e) {
            e.printStackTrace(); // Ghi log chi tiết lỗi
            throw new RuntimeException("Lỗi khi lấy người dùng đã xác thực", e);
        }
    }
    @Transactional
    public AuthenticationResponse authenticate(LoginRequest request){
        var user = userRepository.findUsersByEmail(
                        request.getEmail())
                .orElseThrow(() ->new AppException(ErrorCode.USER_NOT_EXISTED));
        PasswordEncoder passwordEncoder=new BCryptPasswordEncoder(7);
        boolean authenticated= passwordEncoder.matches(request.getPassword(),user.getPassword());
        if(!authenticated){
            throw new AppException(ErrorCode.UNAUTHENTICATION);
        }
        String token=jwtUtils.generateToken(user);
        if(token==null){
            throw new AppException(ErrorCode.CANT_CREATE_TOKEN);
        }


        return new AuthenticationResponse(token,authenticated);

    }

    public String testToken(LoginRequest request){
        var user = userRepository.findUsersByEmail(
                        request.getEmail())
                .orElseThrow(() ->new AppException(ErrorCode.USER_NOT_EXISTED));
        PasswordEncoder passwordEncoder=new BCryptPasswordEncoder(7);
        boolean authenticated= passwordEncoder.matches(request.getPassword(),user.getPassword());
        if(!authenticated){
            throw new AppException(ErrorCode.UNAUTHENTICATION);
        }
        String tokenn= jwtUtils.generateToken(user);
        if(tokenn==null){
            throw new AppException(ErrorCode.CANT_CREATE_TOKEN);
        }
        return tokenn;

    }
    @Transactional
    public IntrospectResponse intropect(IntrospectRequest request) throws JOSEException, ParseException {
        var token =request.getToken();
        JWSVerifier verifier=new MACVerifier(SIGNER_KEY.getBytes());
        SignedJWT signedJWT= SignedJWT.parse(token);
        Date expityTime=signedJWT.getJWTClaimsSet().getExpirationTime();
        var verified= signedJWT.verify(verifier);
//       if(!(verified&&expityTime.after(new Date())))
//           throw new AppException(ErrorCode.INVALID_TOKEN);
        return IntrospectResponse.builder()
                .valid(verified&&expityTime.after(new Date())).build();

    }
}
