package com.loanapp.controller;

import com.loanapp.dto.ApiResponseDTO;
import com.loanapp.dto.LoanTypeDTO;
import com.loanapp.service.LoanTypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/loan-types")
@RequiredArgsConstructor
public class LoanTypeController {
    private final LoanTypeService loanTypeService;

    @GetMapping
    public ResponseEntity<ApiResponseDTO<List<LoanTypeDTO>>> getAllLoanTypes() {
        List<LoanTypeDTO> loanTypes = loanTypeService.getAllActiveLoanTypes();
        return ResponseEntity.ok(ApiResponseDTO.<List<LoanTypeDTO>>builder()
                .success(true)
                .message("Loan types retrieved successfully")
                .data(loanTypes)
                .statusCode(200)
                .build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponseDTO<LoanTypeDTO>> getLoanTypeById(@PathVariable Long id) {
        LoanTypeDTO loanType = loanTypeService.getLoanTypeById(id);
        return ResponseEntity.ok(ApiResponseDTO.<LoanTypeDTO>builder()
                .success(true)
                .message("Loan type retrieved successfully")
                .data(loanType)
                .statusCode(200)
                .build());
    }

    @PostMapping
    public ResponseEntity<ApiResponseDTO<LoanTypeDTO>> createLoanType(
            @RequestBody LoanTypeDTO loanTypeDTO) {
        LoanTypeDTO createdLoanType = loanTypeService.createLoanType(loanTypeDTO);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponseDTO.<LoanTypeDTO>builder()
                        .success(true)
                        .message("Loan type created successfully")
                        .data(createdLoanType)
                        .statusCode(201)
                        .build());
    }
}
