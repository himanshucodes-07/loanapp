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

                // ✅ NULL-SAFE USER
                .userId(
                        loanApplication.getUser() != null
                                ? loanApplication.getUser().getId()
                                : null
                )

                // ✅ NULL-SAFE LOAN TYPE (defensive)
                .loanTypeId(
                        loanApplication.getLoanType() != null
                                ? loanApplication.getLoanType().getId()
                                : null
                )

                .loanTypeName(
                        loanApplication.getLoanType() != null
                                ? loanApplication.getLoanType().getName()
                                : null
                )

                .requestedAmount(loanApplication.getRequestedAmount())
                .requestedDuration(loanApplication.getRequestedDuration())
                .status(loanApplication.getStatus())
                .userConsent(loanApplication.getUserConsent())
                .createdAt(loanApplication.getCreatedAt())
                .updatedAt(loanApplication.getUpdatedAt())
                .build();
    }
}
