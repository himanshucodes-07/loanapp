package com.loanapp.service;

import com.loanapp.entity.EmailOtp;
import com.loanapp.repository.EmailOtpRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class OtpService {

    private final EmailOtpRepository otpRepository;
    private final JavaMailSender mailSender;

    //  SEND OTP (EMAIL ENABLED)
    public void sendOtp(String email) {

        String otp = String.valueOf(100000 + new Random().nextInt(900000));

        EmailOtp emailOtp = new EmailOtp();
        emailOtp.setEmail(email);
        emailOtp.setOtp(otp);
        emailOtp.setExpiresAt(LocalDateTime.now().plusMinutes(5));
        emailOtp.setVerified(false);

        otpRepository.save(emailOtp);

        //  EMAIL MESSAGE (REQUIRED)
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("no-reply@loanapp.test"); // IMPORTANT
        message.setTo(email);
        message.setSubject("LoanApp OTP Verification");
        message.setText(
                "Your OTP is: " + otp + "\nValid for 5 minutes."
        );

        mailSender.send(message); // 🔥 THIS WAS MISSING

        System.out.println("OTP SENT TO MAILTRAP: " + otp);
    }

    //  VERIFY OTP
    public boolean verifyOtp(String email, String otp) {

        EmailOtp latestOtp = otpRepository
                .findTopByEmailOrderByIdDesc(email)
                .orElse(null);

        if (latestOtp == null) return false;
        if (latestOtp.isVerified()) return true;
        if (latestOtp.getExpiresAt().isBefore(LocalDateTime.now())) return false;
        if (!latestOtp.getOtp().equals(otp)) return false;

        latestOtp.setVerified(true);
        otpRepository.save(latestOtp);

        return true;
    }
}
