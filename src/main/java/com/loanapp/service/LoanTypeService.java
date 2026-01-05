package com.loanapp.service;

import com.loanapp.dto.LoanTypeDTO;
import com.loanapp.entity.LoanType;
import com.loanapp.exception.ResourceNotFoundException;
import com.loanapp.mapper.LoanTypeMapper;
import com.loanapp.repository.LoanTypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class LoanTypeService {
    private final LoanTypeRepository loanTypeRepository;
    private final LoanTypeMapper loanTypeMapper;

    public List<LoanTypeDTO> getAllActiveLoanTypes() {
        return loanTypeRepository.findAllByIsActiveTrue().stream()
                .map(loanTypeMapper::toDTO)
                .collect(Collectors.toList());
    }

    public LoanTypeDTO getLoanTypeById(Long loanTypeId) {
        LoanType loanType = loanTypeRepository.findById(loanTypeId)
                .orElseThrow(() -> new ResourceNotFoundException("Loan type not found with id: " + loanTypeId));
        return loanTypeMapper.toDTO(loanType);
    }

    public LoanType getLoanTypeEntityById(Long loanTypeId) {
        return loanTypeRepository.findById(loanTypeId)
                .orElseThrow(() -> new ResourceNotFoundException("Loan type not found with id: " + loanTypeId));
    }

    @Transactional
    public LoanTypeDTO createLoanType(LoanTypeDTO loanTypeDTO) {
        LoanType loanType = loanTypeMapper.toEntity(loanTypeDTO);
        LoanType savedLoanType = loanTypeRepository.save(loanType);
        return loanTypeMapper.toDTO(savedLoanType);
    }

    public boolean isEligibleForLoan(Long loanTypeId, Long requestedAmount, Integer duration) {
        LoanType loanType = getLoanTypeEntityById(loanTypeId);
        return requestedAmount >= loanType.getMinAmount() &&
               requestedAmount <= loanType.getMaxAmount() &&
               duration >= loanType.getMinDurationMonths() &&
               duration <= loanType.getMaxDurationMonths();
    }
}
