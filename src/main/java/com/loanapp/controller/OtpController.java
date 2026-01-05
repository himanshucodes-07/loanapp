package com.loanapp.controller;

import com.loanapp.service.OtpService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/otp")
@RequiredArgsConstructor
public class OtpController {

    private final OtpService otpService;

    //  SEND OTP
    @PostMapping("/send")
    public ResponseEntity<?> sendOtp(@RequestParam String email) {
        System.out.println(">>> OTP API HIT with email = " + email);
        otpService.sendOtp(email);
        return ResponseEntity.ok("OTP sent successfully");
    }


    // VERIFY OTP (FIXED)
    @PostMapping("/verify")
    public ResponseEntity<?> verifyOtp(
            @RequestParam String email,
            @RequestParam String otp) {

        boolean valid = otpService.verifyOtp(email, otp);

        return valid
                ? ResponseEntity.ok("OTP verified successfully")
                : ResponseEntity.badRequest().body("Invalid or expired OTP");
    }
}
