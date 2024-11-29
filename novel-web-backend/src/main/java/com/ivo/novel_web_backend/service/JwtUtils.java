package com.ivo.novel_web_backend.service;

import com.ivo.novel_web_backend.entity.User;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.text.ParseException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.StringJoiner;

@Service
@Component
public class JwtUtils {


    protected static String SIGNER_KEY="Hvj3OStJfA9Ze823YyodKyYSJ33T555IRYFs2yIOcPLiP10J8pMj1wfy8zi2ZWAw";
    public static Set<String> extractRolesFromToken(String token) {
        try {
            // Phân tích token JWT
            JWSObject jwsObject = JWSObject.parse(token);
            JWTClaimsSet claimsSet = JWTClaimsSet.parse(jwsObject.getPayload().toJSONObject());

            // Lấy vai trò từ claim "scope"
            String scope = (String) claimsSet.getClaim("scope");
            if (scope != null) {
                String[] rolesArray = scope.split(" ");

                // Sử dụng HashSet để lưu trữ các vai trò duy nhất
                Set<String> roles = new HashSet<>();
                for (String role : rolesArray) {
                    roles.add(role);
                }
                return roles;
            }
        } catch (ParseException e) {
            throw new RuntimeException("Lỗi khi phân tích token", e);
        }

        // Trả về Set rỗng nếu không có vai trò nào được tìm thấy
        return new HashSet<>();
    }




    String generateToken(User user)  {
        JWSHeader header=new JWSHeader(JWSAlgorithm.HS512);
        JWTClaimsSet jwtClaimsSet=new JWTClaimsSet.Builder()
                .subject(user.getEmail())
                .issuer("ivo.com")
                .issueTime(new Date())
                .expirationTime(new Date(
                        Instant.now().plus(72, ChronoUnit.HOURS).toEpochMilli()
                ))
                .claim("scope",buildScope(user))
                .claim("id", user.getId())
                .build();
        Payload payload=new Payload(jwtClaimsSet.toJSONObject());
        JWSObject jwsObject=new JWSObject(header,payload);
        try {
            jwsObject.sign(new MACSigner(SIGNER_KEY.getBytes()));
            return jwsObject.serialize();
        } catch (JOSEException e) {
            throw new RuntimeException(e);
        }
    }

    // Xác minh tính hợp lệ của token JWT
    public static boolean isTokenValid(String token) {
        try {
            JWSObject jwsObject = JWSObject.parse(token);
            return jwsObject.verify(new MACVerifier(SIGNER_KEY.getBytes()));
        } catch (JOSEException | ParseException e) {
            return false;
        }
    }

    // Trích xuất email từ token JWT
    public static String extractEmailFromToken(String token) {
        try {
            JWSObject jwsObject = JWSObject.parse(token);
            JWTClaimsSet claimsSet = JWTClaimsSet.parse(jwsObject.getPayload().toJSONObject());

            return claimsSet.getSubject();
        } catch (ParseException e) {
            throw new RuntimeException("Lỗi khi phân tích token", e);
        }
    }

    // Trích xuất thời gian hết hạn từ token JWT
    public static Instant extractExpirationFromToken(String token) {
        try {
            JWSObject jwsObject = JWSObject.parse(token);
            JWTClaimsSet claimsSet = JWTClaimsSet.parse(jwsObject.getPayload().toJSONObject());

            // Lấy thời gian hết hạn từ "expirationTime" của token
            Date expiration = claimsSet.getExpirationTime();
            if (expiration != null) {
                return expiration.toInstant();
            }
        } catch (ParseException e) {
            throw new RuntimeException("Lỗi khi phân tích token", e);
        }
        return null;
    }
    private String buildScope(User user){
        StringJoiner stringJoiner = new StringJoiner(" ");
        if (!CollectionUtils.isEmpty(user.getRoles()))
            user.getRoles().forEach(stringJoiner::add);

        return stringJoiner.toString();
    }
}