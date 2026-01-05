package com.loanapp.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "partners")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Partner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Partner name is required")
    @Column(nullable = false, unique = true)
    private String name;

    @NotBlank(message = "Partner email is required")
    @Column(nullable = false, unique = true)
    private String email;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private String type; // BANK, NBFC

    //  PostgreSQL-safe numeric mapping
    @Column(precision = 3, scale = 2)
    private BigDecimal rating;

    @Column(length = 500)
    private String websiteUrl;

    @Column(nullable = false)
    private Boolean isActive;

    @PrePersist
    protected void onCreate() {
        if (rating == null) {
            rating = BigDecimal.valueOf(4.5);
        }
        if (isActive == null) {
            isActive = true;
        }
    }
}
