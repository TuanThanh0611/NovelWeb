package com.ivo.novel_web_backend.service;


import com.ivo.novel_web_backend.dto.request.UserUpdateRequest;
import com.ivo.novel_web_backend.dto.response.UserResponse;
import com.ivo.novel_web_backend.entity.User;
import com.ivo.novel_web_backend.mapper.UserMapper;
import com.ivo.novel_web_backend.repository.UserRepository;
import com.nimbusds.jose.JOSEException;
import com.nimbusds.jose.JWSObject;
import com.nimbusds.jwt.JWTClaimsSet;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
@Component
public class UserSynchronizer {

    private final UserRepository userRepository;
    JwtUtils jwtUtils;
    private UserService userService;
    private UserMapper userMapper;

    private static final String UPDATE_AT_KEY = "last_modified";

    public UserSynchronizer(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Phương thức đồng bộ không còn phụ thuộc vào IDP hay Kinde
    public void syncWithDatabase(String jwtToken, boolean forceResync) {
        try {
            // Phân tích token JWT từ chuỗi
            JWSObject jwsObject = JWSObject.parse(jwtToken);
            JWTClaimsSet claimsSet = JWTClaimsSet.parse(jwsObject.getPayload().toJSONObject());

            // Lấy các "claims" từ token
            Map<String, Object> claims = claimsSet.getClaims();

            // Trích xuất vai trò từ token
            Set<String> rolesFromToken = jwtUtils.extractRolesFromToken(jwtToken);

            // Tạo đối tượng người dùng từ các "claims" và vai trò
            User user = User.fromTokenClaims(claims, rolesFromToken);
            User existingUser = userRepository.findUsersByEmail(user.getEmail()).get();

            if (existingUser!=null) {
                if (claims.containsKey(UPDATE_AT_KEY)) {
                    Instant lastModifiedDate = existingUser.getLastModifiedDate();
                    Instant tokenModifiedDate = Instant.ofEpochSecond((Integer) claims.get(UPDATE_AT_KEY));

                    // Kiểm tra xem dữ liệu trong token có mới hơn hay không
                    if (tokenModifiedDate.isAfter(lastModifiedDate) || forceResync) {
                        UserUpdateRequest userUpdateRequest =userMapper.toUserUpdateRequest(existingUser);
                        updateUser(user.getId(), userUpdateRequest);
                    }
                }
            } else {
                userRepository.save(user);
            }
        } catch (ParseException e) {
            throw new RuntimeException("Lỗi khi phân tích token JWT", e);
        }
    }
    private void updateUser(String id, UserUpdateRequest request) {
        UserResponse userResponse = userService.updateUser(id, request);
        userRepository.save(userMapper.userResponseToUser(userResponse));
    }}