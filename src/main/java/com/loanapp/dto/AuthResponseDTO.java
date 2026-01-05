package com.loanapp.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AuthResponseDTO {
    private Long userId;
    private String email;
    private String fullName;
    private String token;
    private String refreshToken;
    private Long expiresIn;
}
