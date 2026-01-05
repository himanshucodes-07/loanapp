package com.loanapp.controller;

import com.loanapp.dto.ApiResponseDTO;
import com.loanapp.dto.EligibilityCheckDTO;
import com.loanapp.dto.LoanApplicationDTO;
import com.loanapp.security.JwtTokenProvider;
import com.loanapp.service.LoanApplicationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/loan-applications")
@RequiredArgsConstructor
public class LoanApplicationController {
    private final LoanApplicationService loanApplicationService;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("/check-eligibility")
    public ResponseEntity<ApiResponseDTO<LoanApplicationDTO>> checkEligibility(
            @Valid @RequestBody EligibilityCheckDTO eligibilityDTO,
            @RequestHeader("Authorization") String token) {
        Long userId = extractUserIdFromToken(token);
        LoanApplicationDTO application = loanApplicationService.createApplication(userId, eligibilityDTO);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponseDTO.<LoanApplicationDTO>builder()
                        .success(true)
                        .message("Eligibility check submitted successfully")
                        .data(application)
                        .statusCode(201)
                        .build());
    }

    @GetMapping("/my-applications")
    public ResponseEntity<ApiResponseDTO<List<LoanApplicationDTO>>> getUserApplications(
            @RequestHeader("Authorization") String token) {
        Long userId = extractUserIdFromToken(token);
        List<LoanApplicationDTO> applications = loanApplicationService.getUserApplications(userId);
        return ResponseEntity.ok(ApiResponseDTO.<List<LoanApplicationDTO>>builder()
                .success(true)
                .message("User applications retrieved successfully")
                .data(applications)
                .statusCode(200)
                .build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponseDTO<LoanApplicationDTO>> getApplication(@PathVariable Long id) {
        LoanApplicationDTO application = loanApplicationService.getApplicationById(id);
        return ResponseEntity.ok(ApiResponseDTO.<LoanApplicationDTO>builder()
                .success(true)
                .message("Application retrieved successfully")
                .data(application)
                .statusCode(200)
                .build());
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<ApiResponseDTO<LoanApplicationDTO>> updateApplicationStatus(
            @PathVariable Long id,
            @RequestParam String status) {
        LoanApplicationDTO application = loanApplicationService.updateApplicationStatus(id, status);
        return ResponseEntity.ok(ApiResponseDTO.<LoanApplicationDTO>builder()
                .success(true)
                .message("Application status updated successfully")
                .data(application)
                .statusCode(200)
                .build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponseDTO<Void>> deleteApplication(@PathVariable Long id) {
        loanApplicationService.deleteApplication(id);
        return ResponseEntity.ok(ApiResponseDTO.<Void>builder()
                .success(true)
                .message("Application deleted successfully")
                .statusCode(200)
                .build());
    }

    private Long extractUserIdFromToken(String token) {
        String jwtToken = token.replace("Bearer ", "");
        return jwtTokenProvider.getUserIdFromToken(jwtToken);
    }
}
