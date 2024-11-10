package com.ivo.novel_web_backend.mapper;

import com.ivo.novel_web_backend.dto.UserDTO;
import com.ivo.novel_web_backend.dto.request.RegisterRequest;
import com.ivo.novel_web_backend.dto.request.UserUpdateRequest;
import com.ivo.novel_web_backend.dto.response.UserResponse;
import com.ivo.novel_web_backend.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public  interface UserMapper {

    UserResponse toUserResponse(User user);
    List<UserResponse> toListUsers(List<User> users);
    void updateUser(@MappingTarget User user, UserUpdateRequest request);

    User registerRequestToUser(RegisterRequest request);
    UserDTO toUserDTO(User user);
    User userResponseToUser(UserResponse user);
    UserUpdateRequest toUserUpdateRequest(User user);
    List<UserResponse> toListUser(List<User> users);
}