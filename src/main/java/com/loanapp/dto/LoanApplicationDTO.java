package com.loanapp.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class LoanApplicationDTO {

    private Long id;

    /* ===== RELATION IDS ===== */
    private Long userId;
    private Long loanTypeId;

    /* ===== USER SNAPSHOT ===== */
    private String firstName;
    private String lastName;
    private String email;
    private String mobileNumber;
    private String city;
    private Long annualIncome;

    /* ===== LOAN INFO ===== */
    private String loanTypeName;
    private Long requestedAmount;
    private Integer requestedDuration;

    private String status;
    private String rejectionReason;
    private Boolean userConsent;

    /* ===== AUDIT ===== */
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
