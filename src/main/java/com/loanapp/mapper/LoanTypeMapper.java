package com.loanapp.mapper;

import com.loanapp.dto.LoanTypeDTO;
import com.loanapp.entity.LoanType;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class LoanTypeMapper {
    public LoanTypeDTO toDTO(LoanType loanType) {
        if (loanType == null) {
            return null;
        }
        return LoanTypeDTO.builder()
                .id(loanType.getId())
                .name(loanType.getName())
                .description(loanType.getDescription())
                .minAmount(loanType.getMinAmount())
                .maxAmount(loanType.getMaxAmount())
                .minDurationMonths(loanType.getMinDurationMonths())
                .maxDurationMonths(loanType.getMaxDurationMonths())
                .requiredDocuments(loanType.getRequiredDocuments())
                .eligibilityCriteria(loanType.getEligibilityCriteria())
                .baseInterestRate(
                        loanType.getBaseInterestRate() != null
                                ? loanType.getBaseInterestRate().doubleValue()
                                : null
                )
                .isActive(loanType.getIsActive())
                .build();
    }

    public LoanType toEntity(LoanTypeDTO dto) {
        if (dto == null) {
            return null;
        }
        return LoanType.builder()
                .id(dto.getId())
                .name(dto.getName())
                .description(dto.getDescription())
                .minAmount(dto.getMinAmount())
                .maxAmount(dto.getMaxAmount())
                .minDurationMonths(dto.getMinDurationMonths())
                .maxDurationMonths(dto.getMaxDurationMonths())
                .requiredDocuments(dto.getRequiredDocuments())
                .eligibilityCriteria(dto.getEligibilityCriteria())
                .baseInterestRate(BigDecimal.valueOf(dto.getBaseInterestRate()))
                .isActive(dto.getIsActive())
                .build();
    }
}
