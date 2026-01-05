package com.loanapp.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LoanTypeDTO {
    private Long id;
    private String name;
    private String description;
    private Long minAmount;
    private Long maxAmount;
    private Integer minDurationMonths;
    private Integer maxDurationMonths;
    private String requiredDocuments;
    private String eligibilityCriteria;
    private Double baseInterestRate;
    private Boolean isActive;
}
