package com.loanapp.mapper;

import com.loanapp.dto.LoanApplicationDTO;
import com.loanapp.entity.LoanApplication;
import org.springframework.stereotype.Component;

@Component
public class LoanApplicationMapper {
    public LoanApplicationDTO toDTO(LoanApplication loanApplication) {
        if (loanApplication == null) {
            return null;
        }
        return LoanApplicationDTO.builder()
                .id(loanApplication.getId())
                .userId(loanApplication.getUser().getId())
                .loanTypeId(loanApplication.getLoanType().getId())
                .loanTypeName(loanApplication.getLoanType().getName())
                .requestedAmount(loanApplication.getRequestedAmount())
                .requestedDuration(loanApplication.getRequestedDuration())
                .status(loanApplication.getStatus())
                .userConsent(loanApplication.getUserConsent())
                .createdAt(loanApplication.getCreatedAt())
                .updatedAt(loanApplication.getUpdatedAt())
                .build();
    }
}
