package com.loanapp.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EligibilityCheckDTO {
    @NotNull(message = "Loan type ID is required")
    private Long loanTypeId;

    @NotNull(message = "Requested amount is required")
    @Min(value = 50000, message = "Minimum loan amount is 50000")
    private Long requestedAmount;

    @NotNull(message = "Duration is required")
    @Min(value = 3, message = "Minimum duration is 3 months")
    private Integer requestedDuration;

    @NotNull(message = "User consent is required")
    private Boolean userConsent;
}
