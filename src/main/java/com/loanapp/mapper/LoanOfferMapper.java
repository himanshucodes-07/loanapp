package com.loanapp.mapper;

import com.loanapp.dto.LoanOfferDTO;
import com.loanapp.entity.LoanOffer;
import org.springframework.stereotype.Component;

@Component
public class LoanOfferMapper {

    public LoanOfferDTO toDTO(LoanOffer loanOffer) {
        if (loanOffer == null) {
            return null;
        }

        return LoanOfferDTO.builder()
                .id(loanOffer.getId())
                .applicationId(
                        loanOffer.getApplication() != null
                                ? loanOffer.getApplication().getId()
                                : null
                )
                .partnerName(loanOffer.getPartnerName())
                .offerAmount(loanOffer.getOfferAmount())
                .interestRate(loanOffer.getInterestRate())
                .tenureMonths(loanOffer.getTenureMonths())
                .processingFee(loanOffer.getProcessingFee())
                .disbursalDays(loanOffer.getDisbursalDays())

                //  BigDecimal → Double conversion
                .partnerRating(
                        loanOffer.getPartnerRating() != null
                                ? loanOffer.getPartnerRating().doubleValue()
                                : null
                )

                .terms(loanOffer.getTerms())
                .status(String.valueOf(loanOffer.getStatus()))
                .partnerRedirectUrl(loanOffer.getPartnerRedirectUrl())
                .createdAt(loanOffer.getCreatedAt())
                .build();
    }
}
