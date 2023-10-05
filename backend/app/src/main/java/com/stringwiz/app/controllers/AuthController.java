package com.stringwiz.app.controllers;

import com.stringwiz.app.utils.JwtUtil;
import com.stringwiz.app.web.UserRegistrationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired private AuthenticationManager authenticationManager;
    @Autowired private JwtUtil jwtUtil;

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody UserRegistrationDto request) {
        try {
            System.out.println("helloooo");
            Authentication authenticate = authenticationManager
                    .authenticate(
                            new UsernamePasswordAuthenticationToken(
                                    request.getEmail(),
                                    request.getPassword()
                            )
                    );

            UserDetails user = (UserDetails) authenticate.getPrincipal();

            return ResponseEntity.ok()
                    .header(
                        HttpHeaders.AUTHORIZATION,
                        jwtUtil.generateToken(user)
                    )
                    .body(user);


        } catch(BadCredentialsException ex) {
            System.out.println("error :((((");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        } catch(AuthenticationException ae) {
//            ae.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }


}
