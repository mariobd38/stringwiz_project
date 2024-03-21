package com.stringwiz.app.controllers;

import com.stringwiz.app.repositories.UserRepository;
import com.stringwiz.app.utils.JwtUtil;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    JwtUtil jwtUtil;

    @GetMapping("/api/user/logout")
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response) {
        request.getSession().invalidate();

        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                cookie.setMaxAge(0);
                cookie.setValue(null);
                cookie.setPath("/");
                response.addCookie(cookie);
            }
        }
        return ResponseEntity.noContent().build();
    }
}
