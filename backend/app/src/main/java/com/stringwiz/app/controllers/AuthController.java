package com.stringwiz.app.controllers;

import com.stringwiz.app.services.CustomUserService;
import com.stringwiz.app.utils.CookieUtil;
import com.stringwiz.app.utils.JwtUtil;
import com.stringwiz.app.web.UserAuthenticationDto;
import com.stringwiz.app.web.UserPlatformDto;
import com.stringwiz.app.web.UserRegistrationDto;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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
    @Value("${JWT_COOKIE_ATTRIBUTE_NAME}")
    private String JWT_COOKIE_NAME;

    @PostMapping("/api/auth/login")
    public ResponseEntity<?> login(@RequestBody UserAuthenticationDto request, HttpServletResponse response) {
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
            CookieUtil.addCookie(response, JWT_COOKIE_NAME, jwtUtil.generateToken(user));

            UserPlatformDto userDto = new UserPlatformDto(user.getFullName(), user.getEmail(), user.getPicture());
            return ResponseEntity.ok().body(userDto);
        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping("/api/auth/signup")
    public ResponseEntity<?> register(@RequestBody UserRegistrationDto requestBody, HttpServletRequest request, HttpServletResponse response) {
        try {
            User user = new User(requestBody.getFullName(), requestBody.getEmail(), requestBody.getPassword(),null);
            //emailUtil.sendEmail(request.getEmail());

            customUserService.saveUser(user);
            CookieUtil.deleteCookie(request,response,JWT_COOKIE_NAME);
            CookieUtil.addCookie(response, JWT_COOKIE_NAME, jwtUtil.generateToken(user));

            return ResponseEntity.ok().build();
        } catch(Exception exception) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
}
