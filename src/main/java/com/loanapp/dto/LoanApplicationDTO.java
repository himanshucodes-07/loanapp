package com.loanapp.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LoanApplicationDTO {
    private Long id;
    private Long userId;
    private Long loanTypeId;
    private String loanTypeName;
    private Long requestedAmount;
    private Integer requestedDuration;
    private String status;
    private Boolean userConsent;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
