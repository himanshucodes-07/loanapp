package com.loanapp.service;

import com.loanapp.dto.EligibilityCheckDTO;
import com.loanapp.dto.LoanApplicationCreateDTO;
import com.loanapp.dto.LoanApplicationDTO;
import com.loanapp.entity.LoanApplication;
import com.loanapp.entity.LoanType;
import com.loanapp.entity.User;
import com.loanapp.exception.InvalidRequestException;
import com.loanapp.exception.ResourceNotFoundException;
import com.loanapp.mapper.LoanApplicationMapper;
import com.loanapp.repository.LoanApplicationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class LoanApplicationService {

    private final LoanApplicationRepository loanApplicationRepository;
    private final UserService userService;
    private final LoanTypeService loanTypeService;
    private final LoanApplicationMapper loanApplicationMapper;

    /* =====================================================
       1️⃣ ELIGIBILITY FLOW (OLD – KEEP AS IS)
       ===================================================== */
    public LoanApplicationDTO createApplication(
            Long userId,
            EligibilityCheckDTO eligibilityDTO
    ) {

        User user = null;
        if (userId != null) {
            user = userService.getUserById(userId);
        }

        if (!loanTypeService.isEligibleForLoan(
                eligibilityDTO.getLoanTypeId(),
                eligibilityDTO.getRequestedAmount(),
                eligibilityDTO.getRequestedDuration()
        )) {
            throw new InvalidRequestException(
                    "Requested amount or duration is outside loan limits"
            );
        }

        LoanType loanType =
                loanTypeService.getLoanTypeEntityById(
                        eligibilityDTO.getLoanTypeId()
                );

        LoanApplication application = LoanApplication.builder()
                .user(user)                         // nullable
                .loanType(loanType)
                .requestedAmount(eligibilityDTO.getRequestedAmount())
                .requestedDuration(eligibilityDTO.getRequestedDuration())
                .userConsent(eligibilityDTO.getUserConsent())
                .status("PENDING")
                .build();

        LoanApplication saved = loanApplicationRepository.save(application);
        return loanApplicationMapper.toDTO(saved);
    }

    /* =====================================================
       2️⃣ FULL CREATE FLOW (NEW – WITH SNAPSHOT DATA)
       ===================================================== */
    public LoanApplicationDTO createApplication(
            Long userId,
            LoanApplicationCreateDTO dto
    ) {

        User user = null;
        if (userId != null) {
            user = userService.getUserById(userId);
        }

        // Validate loan eligibility
        if (!loanTypeService.isEligibleForLoan(
                dto.getLoanTypeId(),
                dto.getRequestedAmount(),
                dto.getRequestedDuration()
        )) {
            throw new InvalidRequestException(
                    "Requested amount or duration is outside loan limits"
            );
        }

        LoanType loanType =
                loanTypeService.getLoanTypeEntityById(dto.getLoanTypeId());

        LoanApplication application = LoanApplication.builder()
                /* ===== USER SNAPSHOT ===== */
                .firstName(dto.getFirstName())
                .lastName(dto.getLastName())
                .email(dto.getEmail())
                .mobileNumber(dto.getMobileNumber())
                .city(dto.getCity())
                .annualIncome(dto.getAnnualIncome())

                /* ===== RELATIONS ===== */
                .user(user)                         // nullable
                .loanType(loanType)

                /* ===== LOAN INFO ===== */
                .requestedAmount(dto.getRequestedAmount())
                .requestedDuration(dto.getRequestedDuration())
                .userConsent(dto.getUserConsent())
                .status("PENDING")
                .build();

        LoanApplication saved = loanApplicationRepository.save(application);
        return loanApplicationMapper.toDTO(saved);
    }

    /* =====================================================
       3️⃣ GET APPLICATION BY ID
       ===================================================== */
    public LoanApplicationDTO getApplicationById(Long applicationId) {
        LoanApplication application =
                loanApplicationRepository.findById(applicationId)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Application not found with id: " + applicationId
                                )
                        );

        return loanApplicationMapper.toDTO(application);
    }

    /* =====================================================
       4️⃣ GET USER APPLICATIONS
       ===================================================== */
    public List<LoanApplicationDTO> getUserApplications(Long userId) {

        userService.getUserById(userId); // validate user exists

        return loanApplicationRepository
                .findByUserIdOrderByCreatedAtDesc(userId)
                .stream()
                .map(loanApplicationMapper::toDTO)
                .collect(Collectors.toList());
    }

    /* =====================================================
       5️⃣ UPDATE STATUS (ADMIN)
       ===================================================== */
    public LoanApplicationDTO updateApplicationStatus(
            Long applicationId,
            String status
    ) {
        LoanApplication application =
                loanApplicationRepository.findById(applicationId)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Application not found with id: " + applicationId
                                )
                        );

        application.setStatus(status);
        LoanApplication updated =
                loanApplicationRepository.save(application);

        return loanApplicationMapper.toDTO(updated);
    }

    /* =====================================================
       6️⃣ DELETE APPLICATION
       ===================================================== */
    public void deleteApplication(Long applicationId) {
        if (!loanApplicationRepository.existsById(applicationId)) {
            throw new ResourceNotFoundException(
                    "Application not found with id: " + applicationId
            );
        }
        loanApplicationRepository.deleteById(applicationId);
    }
}
