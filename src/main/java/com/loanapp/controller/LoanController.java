package com.loanapp.controller;

import com.loanapp.dto.ApiResponseDTO;
import com.loanapp.dto.LoanTypeDTO;
import com.loanapp.service.LoanTypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/loans")
@RequiredArgsConstructor
public class LoanController {

    private final LoanTypeService loanTypeService;

    @GetMapping
    public ResponseEntity<ApiResponseDTO<List<LoanTypeDTO>>> getAllLoans() {

        List<LoanTypeDTO> loans = loanTypeService.getAllActiveLoanTypes();

        return ResponseEntity.ok(
                ApiResponseDTO.<List<LoanTypeDTO>>builder()
                        .success(true)
                        .message("Loans retrieved successfully")
                        .data(loans)
                        .statusCode(200)
                        .build()
        );
    }
}
