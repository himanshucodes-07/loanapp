package com.loanapp.controller;

import com.loanapp.dto.ApiResponseDTO;
import com.loanapp.dto.AuthRequestDTO;
import com.loanapp.dto.AuthResponseDTO;
import com.loanapp.dto.UserRegistrationDTO;
import com.loanapp.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<ApiResponseDTO<AuthResponseDTO>> register(
            @Valid @RequestBody UserRegistrationDTO registrationDTO) {
        AuthResponseDTO authResponse = authService.register(registrationDTO);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponseDTO.<AuthResponseDTO>builder()
                        .success(true)
                        .message("User registered successfully")
                        .data(authResponse)
                        .statusCode(201)
                        .build());
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponseDTO<AuthResponseDTO>> login(
            @Valid @RequestBody AuthRequestDTO loginRequest) {
        AuthResponseDTO authResponse = authService.login(loginRequest);
        return ResponseEntity.ok(ApiResponseDTO.<AuthResponseDTO>builder()
                .success(true)
                .message("Login successful")
                .data(authResponse)
                .statusCode(200)
                .build());
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<ApiResponseDTO<AuthResponseDTO>> refreshToken(
            @RequestHeader("Authorization") String refreshToken) {
        String token = refreshToken.replace("Bearer ", "");
        AuthResponseDTO authResponse = authService.refreshToken(token);
        return ResponseEntity.ok(ApiResponseDTO.<AuthResponseDTO>builder()
                .success(true)
                .message("Token refreshed successfully")
                .data(authResponse)
                .statusCode(200)
                .build());
    }
}
