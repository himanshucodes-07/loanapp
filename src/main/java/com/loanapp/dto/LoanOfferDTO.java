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
public class LoanOfferDTO {
    private Long id;
    private Long applicationId;
    private String partnerName;
    private Long offerAmount;
    private Double interestRate;
    private Integer tenureMonths;
    private Double processingFee;
    private Integer disbursalDays;
    private Double partnerRating;
    private String terms;
    private String status;
    private String partnerRedirectUrl;
    private LocalDateTime createdAt;
}
