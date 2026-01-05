package com.loanapp.repository;

import com.loanapp.entity.LoanApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface LoanApplicationRepository extends JpaRepository<LoanApplication, Long> {
    List<LoanApplication> findByUserId(Long userId);
    List<LoanApplication> findByUserIdOrderByCreatedAtDesc(Long userId);
    List<LoanApplication> findByStatus(String status);
}
