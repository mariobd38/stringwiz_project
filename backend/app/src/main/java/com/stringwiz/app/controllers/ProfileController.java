package com.stringwiz.app.controllers;

import com.stringwiz.app.models.Profile;
import com.stringwiz.app.models.ProfileFile;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.ProfileRepository;
import com.stringwiz.app.repositories.UserRepository;
import com.stringwiz.app.web.ProfileDto;
import com.stringwiz.app.web.ProfileFileDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("/api")
public class ProfileController {
    @Autowired ProfileRepository profileRepository;
    @Autowired UserRepository userRepository;

    @PostMapping("/api/onboarding/profile")
    public ResponseEntity<?> uploadFile(@AuthenticationPrincipal User user, @RequestBody ProfileDto request) {
        try {
            String avatarType = request.getAvatarType();
            if ("default".equals(avatarType)) {
                return ResponseEntity.ok(handleDefaultAvatar(user));
            }

            String color = request.getColor();
            if (color != null) {
                return ResponseEntity.ok(handleColorChange(user, color));
            }

            return ResponseEntity.ok(handleFileUpload(user, request));
        } catch(Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    private ProfileDto handleDefaultAvatar(User user) {
        user.setProfile(null);
        userRepository.save(user);
        return new ProfileDto(null,null,"default");
    }

    private ProfileDto handleColorChange(User user, String color) {
        Profile profile = profileRepository.findByUser(user);
        if (profile == null) {
            profile = new Profile();
            profile.setUser(user);
        }
        profile.setType("color");
        profile.setColor(color);
        profile.setProfileFile(null);
        user.setProfile(profile);
        profileRepository.save(profile);
        userRepository.save(user);
        return new ProfileDto(color,null,"color");
    }

    private ProfileDto handleFileUpload(User user, ProfileDto request) {
        String name = request.getPfd().getName();
        String type = request.getPfd().getType();
        String data = request.getPfd().getData();

        ProfileFile profileFile = new ProfileFile(name, type);
        profileFile.setBase64Data(data);

        Profile profile = profileRepository.findByUser(user);
        if (profile == null) {
            profile = new Profile();
            profile.setUser(user);
        }
        profile.setProfileFile(profileFile);
        profile.setType("image");
        profile.setColor(null);
        profileRepository.save(profile);

        user.setProfile(profile);
        userRepository.save(user);
        return new ProfileDto(null,request.getPfd(),"image");
    }
}
