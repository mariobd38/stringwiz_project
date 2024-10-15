package com.stringwiz.app.controllers;

import com.stringwiz.app.models.Space;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.UserRepository;
import com.stringwiz.app.services.SpaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SpaceController {
    @Autowired SpaceService spaceService;
    @Autowired UserRepository userRepository;

    @PostMapping("/api/spaces/create")
    public ResponseEntity<?> createSpace(@AuthenticationPrincipal User user, @RequestBody Space space) {
        try {
            Space newSpace = spaceService.save(user, space);
            return ResponseEntity.ok(newSpace);
        } catch (Exception e) {
            return ResponseEntity.ok(new Space());
        }
    }
}
