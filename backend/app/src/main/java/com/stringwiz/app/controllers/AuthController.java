package com.stringwiz.app.controllers;

import com.stringwiz.app.services.CustomUserService;
import com.stringwiz.app.utils.JwtUtil;
import com.stringwiz.app.web.UserAuthenticationDto;
import com.stringwiz.app.web.UserRegistrationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import com.stringwiz.app.models.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Controller
public class AuthController {
    @Autowired private AuthenticationManager authenticationManager;
    @Autowired private JwtUtil jwtUtil;
    @Autowired private CustomUserService customUserService;

    @PostMapping("/api/auth/login")
    public ResponseEntity<?> login(@RequestBody UserAuthenticationDto request) {
        try {
            String errorMessage = customUserService.userAuthenticationValidation(request);
            if (errorMessage != null) {
                System.out.println(errorMessage);
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
            }
            Authentication authenticate = authenticationManager
                .authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
                );

            User user = (User) authenticate.getPrincipal();
            user.setPassword(null);
            return ResponseEntity.ok()
                .header(
                    HttpHeaders.AUTHORIZATION,
                    jwtUtil.generateToken(user)
                )
                .body(user);

        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping("/api/auth/signup")
    public ResponseEntity<?> register(@RequestBody UserRegistrationDto request) {
        try {
            List<String> errorMessages = customUserService.userRegistrationValidation(request); // validates user registration data
            if (!errorMessages.isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessages);
            }
            User user = new User(request.getFullName(), request.getEmail(), request.getPassword());
            //emailUtil.sendEmail(request.getEmail());
            customUserService.saveUser(user);
            return ResponseEntity.ok()
                .header(
                    HttpHeaders.AUTHORIZATION,
                    jwtUtil.generateToken(user)
                )
                .build();
        } catch(Exception exception) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
}
