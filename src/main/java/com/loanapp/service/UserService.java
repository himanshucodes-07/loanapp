package com.loanapp.service;

import com.loanapp.dto.UserRegistrationDTO;
import com.loanapp.entity.User;
import com.loanapp.exception.ResourceNotFoundException;
import com.loanapp.exception.DuplicateResourceException;
import com.loanapp.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public User registerUser(UserRegistrationDTO registrationDTO) {
        if (userRepository.existsByEmail(registrationDTO.getEmail())) {
            throw new DuplicateResourceException("Email already registered");
        }
        if (userRepository.existsByMobileNumber(registrationDTO.getMobileNumber())) {
            throw new DuplicateResourceException("Mobile number already registered");
        }

        User user = User.builder()
                .firstName(registrationDTO.getFirstName())
                .lastName(registrationDTO.getLastName())
                .email(registrationDTO.getEmail())
                .mobileNumber(registrationDTO.getMobileNumber())
                .password(passwordEncoder.encode(registrationDTO.getPassword()))
                .city(registrationDTO.getCity())
                .annualIncome(registrationDTO.getAnnualIncome())
                .build();

        return userRepository.save(user);
    }

    public User getUserById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + email));
    }

    public User updateUser(Long userId, User userDetails) {
        User user = getUserById(userId);
        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setCity(userDetails.getCity());
        user.setAnnualIncome(userDetails.getAnnualIncome());
        return userRepository.save(user);
    }

    public boolean validatePassword(String rawPassword, String encodedPassword) {
        return passwordEncoder.matches(rawPassword, encodedPassword);
    }
}
