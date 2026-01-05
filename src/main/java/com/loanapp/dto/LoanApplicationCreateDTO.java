package com.loanapp.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoanApplicationCreateDTO {

    /* ================= USER SNAPSHOT ================= */
    @NotBlank(message = "First name is required")
    private String firstName;

    @NotBlank(message = "Last name is required")
    private String lastName;

    @NotBlank(message = "Email is required")
    private String email;

    @NotBlank(message = "Mobile number is required")
    private String mobileNumber;

    @NotBlank(message = "City is required")
    private String city;

    @NotNull(message = "Annual income is required")
    @Min(value = 50000, message = "Minimum income should be 50000")
    private Long annualIncome;

    /* ================= LOAN INFO ================= */
    @NotNull(message = "Loan type ID is required")
    private Long loanTypeId;

    @NotNull(message = "Requested amount is required")
    @Min(value = 50000, message = "Minimum loan amount is 50000")
    private Long requestedAmount;

    @NotNull(message = "Loan duration is required")
    @Min(value = 3, message = "Minimum duration is 3 months")
    private Integer requestedDuration;

    @NotNull(message = "User consent is required")
    private Boolean userConsent;
}
