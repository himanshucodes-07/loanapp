package com.loanapp.service;

import com.loanapp.dto.LoanOfferDTO;
import com.loanapp.entity.LoanApplication;
import com.loanapp.entity.LoanOffer;
import com.loanapp.entity.OfferStatus;
import com.loanapp.exception.ResourceNotFoundException;
import com.loanapp.mapper.LoanOfferMapper;
import com.loanapp.repository.LoanApplicationRepository;
import com.loanapp.repository.LoanOfferRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class LoanOfferService {
    private final LoanOfferRepository loanOfferRepository;
    private final LoanApplicationRepository loanApplicationRepository;
    private final LoanOfferMapper loanOfferMapper;

    public List<LoanOfferDTO> getOffersForApplication(Long applicationId) {
        LoanApplication application = loanApplicationRepository.findById(applicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Application not found with id: " + applicationId));
        
        return loanOfferRepository.findByApplicationIdAndStatus(applicationId, "ACTIVE").stream()
                .map(loanOfferMapper::toDTO)
                .collect(Collectors.toList());
    }

    public LoanOfferDTO createOffer(Long applicationId, LoanOfferDTO offerDTO) {
        LoanApplication application = loanApplicationRepository.findById(applicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Application not found with id: " + applicationId));

        LoanOffer offer = LoanOffer.builder()
                .application(application)
                .partnerName(offerDTO.getPartnerName())
                .offerAmount(offerDTO.getOfferAmount())
                .interestRate(offerDTO.getInterestRate())
                .tenureMonths(offerDTO.getTenureMonths())
                .processingFee(offerDTO.getProcessingFee())
                .disbursalDays(offerDTO.getDisbursalDays())
                .partnerRating(BigDecimal.valueOf(offerDTO.getPartnerRating()))
                .terms(offerDTO.getTerms())
                .partnerRedirectUrl(offerDTO.getPartnerRedirectUrl())
                .status(OfferStatus.valueOf("ACTIVE"))
                .build();

        LoanOffer savedOffer = loanOfferRepository.save(offer);
        return loanOfferMapper.toDTO(savedOffer);
    }

    public LoanOfferDTO getOfferById(Long offerId) {
        LoanOffer offer = loanOfferRepository.findById(offerId)
                .orElseThrow(() -> new ResourceNotFoundException("Offer not found with id: " + offerId));
        return loanOfferMapper.toDTO(offer);
    }

    public LoanOfferDTO updateOfferStatus(Long offerId, String status) {
        LoanOffer offer = loanOfferRepository.findById(offerId)
                .orElseThrow(() -> new ResourceNotFoundException("Offer not found with id: " + offerId));
        offer.setStatus(OfferStatus.valueOf(status));
        LoanOffer updatedOffer = loanOfferRepository.save(offer);
        return loanOfferMapper.toDTO(updatedOffer);
    }

    public void deleteOffer(Long offerId) {
        if (!loanOfferRepository.existsById(offerId)) {
            throw new ResourceNotFoundException("Offer not found with id: " + offerId);
        }
        loanOfferRepository.deleteById(offerId);
    }
}
