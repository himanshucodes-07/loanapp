package com.loanapp.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "loan_types")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LoanType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Loan type name is required")
    @Column(nullable = false, unique = true)
    private String name; // PERSONAL_LOAN, HEALTH_LOAN, ZERO_BALANCE_ACCOUNT

    @NotBlank(message = "Description is required")
    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private Long minAmount;

    @Column(nullable = false)
    private Long maxAmount;

    @Column(nullable = false)
    private Integer minDurationMonths;

    @Column(nullable = false)
    private Integer maxDurationMonths;

    @Column(columnDefinition = "TEXT")
    private String requiredDocuments;

    @Column(columnDefinition = "TEXT")
    private String eligibilityCriteria;

    // ✅ PostgreSQL-safe numeric column
    @Column(precision = 5, scale = 2, nullable = false)
    private BigDecimal baseInterestRate;

    @Column(nullable = false)
    private Boolean isActive;

    // ---------- Defaults handled in Java ----------
    @PrePersist
    protected void onCreate() {
        if (baseInterestRate == null) {
            baseInterestRate = BigDecimal.valueOf(10.5);
        }
        if (isActive == null) {
            isActive = true;
        }
    }
}
