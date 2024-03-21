package com.stringwiz.app.controllers;


import com.stringwiz.app.models.Task;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.UserRepository;
import com.stringwiz.app.utils.JwtUtil;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    JwtUtil jwtUtil;
    @Value("${JWT_COOKIE_ATTRIBUTE_NAME}")
    private String JWT_COOKIE_NAME;

    @GetMapping("/api/users/get")
    public ResponseEntity<?> getTasks(@CookieValue(name = "${JWT_COOKIE_ATTRIBUTE_NAME}", required = false) String jwt) {
        if (jwt == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("JWT token not found in cookie");
        }
        try {
            Optional<User> optionalUser = userRepository.findByEmail(jwtUtil.getUserEmailFromToken(jwt));
            if (optionalUser.isPresent()) {
                String fullName = optionalUser.get().getFullName();
                String email = optionalUser.get().getEmail();
                List<String> userInfo = List.of(fullName,email);
                return ResponseEntity.ok(userInfo);

//                List<Task> tasks = taskService.get(optionalUser.get());
//                return ResponseEntity.ok(tasks);
            }
            throw new NullPointerException("User does not exist");
        } catch(NullPointerException e) {
            throw new NullPointerException("User does not exist");
        }
    }

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
