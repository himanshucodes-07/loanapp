package com.loanapp.service;

import com.loanapp.dto.AuthRequestDTO;
import com.loanapp.dto.AuthResponseDTO;
import com.loanapp.dto.UserRegistrationDTO;
import com.loanapp.entity.User;
import com.loanapp.exception.InvalidCredentialsException;
import com.loanapp.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class AuthService {
    private final UserService userService;
    private final JwtTokenProvider jwtTokenProvider;

    public AuthResponseDTO register(UserRegistrationDTO registrationDTO) {
        User user = userService.registerUser(registrationDTO);
        String token = jwtTokenProvider.generateToken(user.getId(), user.getEmail());
        String refreshToken = jwtTokenProvider.generateRefreshToken(user.getId(), user.getEmail());

        return AuthResponseDTO.builder()
                .userId(user.getId())
                .email(user.getEmail())
                .fullName(user.getFirstName() + " " + user.getLastName())
                .token(token)
                .refreshToken(refreshToken)
                .expiresIn(3600L) // 1 hour
                .build();
    }

    public AuthResponseDTO login(AuthRequestDTO loginRequest) {
        User user = userService.getUserByEmail(loginRequest.getEmail());

        if (!userService.validatePassword(loginRequest.getPassword(), user.getPassword())) {
            throw new InvalidCredentialsException("Invalid email or password");
        }

        String token = jwtTokenProvider.generateToken(user.getId(), user.getEmail());
        String refreshToken = jwtTokenProvider.generateRefreshToken(user.getId(), user.getEmail());

        return AuthResponseDTO.builder()
                .userId(user.getId())
                .email(user.getEmail())
                .fullName(user.getFirstName() + " " + user.getLastName())
                .token(token)
                .refreshToken(refreshToken)
                .expiresIn(3600L)
                .build();
    }

    public AuthResponseDTO refreshToken(String refreshToken) {
        if (!jwtTokenProvider.validateToken(refreshToken)) {
            throw new InvalidCredentialsException("Invalid refresh token");
        }

        Long userId = jwtTokenProvider.getUserIdFromToken(refreshToken);
        User user = userService.getUserById(userId);
        
        String newToken = jwtTokenProvider.generateToken(user.getId(), user.getEmail());
        String newRefreshToken = jwtTokenProvider.generateRefreshToken(user.getId(), user.getEmail());

        return AuthResponseDTO.builder()
                .userId(user.getId())
                .email(user.getEmail())
                .fullName(user.getFirstName() + " " + user.getLastName())
                .token(newToken)
                .refreshToken(newRefreshToken)
                .expiresIn(3600L)
                .build();
    }
}
