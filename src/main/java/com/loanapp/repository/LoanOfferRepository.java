package com.loanapp.repository;

import com.loanapp.entity.LoanOffer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface LoanOfferRepository extends JpaRepository<LoanOffer, Long> {
    List<LoanOffer> findByApplicationId(Long applicationId);
    List<LoanOffer> findByApplicationIdAndStatus(Long applicationId, String status);
}
