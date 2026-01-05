package com.loanapp.controller;

import com.loanapp.dto.ApiResponseDTO;
import com.loanapp.dto.LoanOfferDTO;
import com.loanapp.service.LoanOfferService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/loan-offers")
@RequiredArgsConstructor
public class LoanOfferController {
    private final LoanOfferService loanOfferService;

    @GetMapping("/application/{applicationId}")
    public ResponseEntity<ApiResponseDTO<List<LoanOfferDTO>>> getOffersForApplication(
            @PathVariable Long applicationId) {
        List<LoanOfferDTO> offers = loanOfferService.getOffersForApplication(applicationId);
        return ResponseEntity.ok(ApiResponseDTO.<List<LoanOfferDTO>>builder()
                .success(true)
                .message("Offers retrieved successfully")
                .data(offers)
                .statusCode(200)
                .build());
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponseDTO<LoanOfferDTO>> createOffer(
            @RequestParam Long applicationId,
            @RequestBody LoanOfferDTO offerDTO) {
        LoanOfferDTO createdOffer = loanOfferService.createOffer(applicationId, offerDTO);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponseDTO.<LoanOfferDTO>builder()
                        .success(true)
                        .message("Offer created successfully")
                        .data(createdOffer)
                        .statusCode(201)
                        .build());
    }

    @GetMapping("/{id}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<ApiResponseDTO<LoanOfferDTO>> getOffer(@PathVariable Long id) {
        LoanOfferDTO offer = loanOfferService.getOfferById(id);
        return ResponseEntity.ok(ApiResponseDTO.<LoanOfferDTO>builder()
                .success(true)
                .message("Offer retrieved successfully")
                .data(offer)
                .statusCode(200)
                .build());
    }

    @PutMapping("/{id}/status")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<ApiResponseDTO<LoanOfferDTO>> updateOfferStatus(
            @PathVariable Long id,
            @RequestParam String status) {
        LoanOfferDTO offer = loanOfferService.updateOfferStatus(id, status);
        return ResponseEntity.ok(ApiResponseDTO.<LoanOfferDTO>builder()
                .success(true)
                .message("Offer status updated successfully")
                .data(offer)
                .statusCode(200)
                .build());
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponseDTO<Void>> deleteOffer(@PathVariable Long id) {
        loanOfferService.deleteOffer(id);
        return ResponseEntity.ok(ApiResponseDTO.<Void>builder()
                .success(true)
                .message("Offer deleted successfully")
                .statusCode(200)
                .build());
    }
}
