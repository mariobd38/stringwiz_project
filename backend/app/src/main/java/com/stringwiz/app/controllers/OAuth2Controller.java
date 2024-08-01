package com.stringwiz.app.controllers;

import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.UserRepository;
import com.stringwiz.app.services.CustomUserService;
import com.stringwiz.app.services.OAuth2TokenRetrievalService;
import com.stringwiz.app.utils.CookieUtil;
import com.stringwiz.app.utils.JwtOAuth2Util;
import com.stringwiz.app.utils.JwtUtil;
import com.stringwiz.app.utils.UserPlatformDtoConverter;
import com.stringwiz.app.web.UserPlatformDto;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.Optional;

@RestController
public class OAuth2Controller {
    @Autowired private UserRepository userRepository;
    @Autowired private OAuth2TokenRetrievalService oAuth2TokenRetrievalService;
    @Autowired private JwtOAuth2Util jwtOAuth2Util;
    @Autowired private JwtUtil jwtUtil;
    @Autowired private CustomUserService customUserService;
    @Value("${JWT_COOKIE_ATTRIBUTE_NAME}")
    private String JWT_COOKIE_NAME;

    @GetMapping("/google/callback")
    public ResponseEntity<?> exchangeAuthorizationForUserData(@RequestParam("code") String code, HttpServletResponse response) {
        try {
            Map<String, String> tokens = oAuth2TokenRetrievalService.getTokens(code);
            String jwt = tokens.get("jwt");

            Map<String, String> userData = jwtOAuth2Util.getUserDataFromToken(jwt);

            User newUser = new User(userData.get("fullName"), userData.get("email"), null, userData.get("picture"));
            Optional<User> user = userRepository.findByEmail(newUser.getEmail());
            if (user.isEmpty()) {
                customUserService.saveUser(newUser);
            }
            String appJwt = jwtUtil.generateToken(user.orElse(newUser));
            CookieUtil.addCookie(response, JWT_COOKIE_NAME, appJwt);
            UserPlatformDto userDto = UserPlatformDtoConverter.convertToDto(user.orElse(newUser));
            return ResponseEntity.ok().body(userDto);
            //return ResponseEntity.ok().body(user.orElse(newUser));
        }
        catch(Exception exception) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
}