package com.loanapp.service;

import com.loanapp.dto.EligibilityCheckDTO;
import com.loanapp.dto.LoanApplicationDTO;
import com.loanapp.entity.LoanApplication;
import com.loanapp.entity.LoanType;
import com.loanapp.entity.User;
import com.loanapp.exception.ResourceNotFoundException;
import com.loanapp.exception.InvalidRequestException;
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

    public LoanApplicationDTO createApplication(Long userId, EligibilityCheckDTO eligibilityDTO) {
        User user = userService.getUserById(userId);
        
        if (!loanTypeService.isEligibleForLoan(
                eligibilityDTO.getLoanTypeId(),
                eligibilityDTO.getRequestedAmount(),
                eligibilityDTO.getRequestedDuration())) {
            throw new InvalidRequestException("Requested amount or duration is outside loan limits");
        }

        LoanType loanType = loanTypeService.getLoanTypeEntityById(eligibilityDTO.getLoanTypeId());

        LoanApplication application = LoanApplication.builder()
                .user(user)
                .loanType(loanType)
                .requestedAmount(eligibilityDTO.getRequestedAmount())
                .requestedDuration(eligibilityDTO.getRequestedDuration())
                .userConsent(eligibilityDTO.getUserConsent())
                .status("PENDING")
                .build();

        LoanApplication savedApplication = loanApplicationRepository.save(application);
        return loanApplicationMapper.toDTO(savedApplication);
    }

    public LoanApplicationDTO getApplicationById(Long applicationId) {
        LoanApplication application = loanApplicationRepository.findById(applicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Application not found with id: " + applicationId));
        return loanApplicationMapper.toDTO(application);
    }

    public List<LoanApplicationDTO> getUserApplications(Long userId) {
        userService.getUserById(userId); // Validate user exists
        return loanApplicationRepository.findByUserIdOrderByCreatedAtDesc(userId).stream()
                .map(loanApplicationMapper::toDTO)
                .collect(Collectors.toList());
    }

    public LoanApplicationDTO updateApplicationStatus(Long applicationId, String status) {
        LoanApplication application = loanApplicationRepository.findById(applicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Application not found with id: " + applicationId));
        application.setStatus(status);
        LoanApplication updatedApplication = loanApplicationRepository.save(application);
        return loanApplicationMapper.toDTO(updatedApplication);
    }

    public void deleteApplication(Long applicationId) {
        if (!loanApplicationRepository.existsById(applicationId)) {
            throw new ResourceNotFoundException("Application not found with id: " + applicationId);
        }
        loanApplicationRepository.deleteById(applicationId);
    }
}
