package com.loanapp.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserRegistrationDTO {
    @NotBlank(message = "First name is required")
    private String firstName;

    @NotBlank(message = "Last name is required")
    private String lastName;

    @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid")
    private String email;

    @NotBlank(message = "Mobile number is required")
    @Pattern(regexp = "^[6-9][0-9]{9}$", message = "Mobile number should be 10 digits starting with 6-9")
    private String mobileNumber;

    @NotBlank(message = "Password is required")
    @Size(min = 6, max = 20, message = "Password should be between 6 and 20 characters")
    private String password;

    @NotBlank(message = "City is required")
    private String city;

    @NotNull(message = "Annual income is required")
    @Min(value = 100000, message = "Annual income should be at least 100000")
    private Long annualIncome;
}
