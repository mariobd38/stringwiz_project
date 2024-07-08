package com.stringwiz.app.utils;

import com.stringwiz.app.models.Profile;
import com.stringwiz.app.models.ProfileFile;
import com.stringwiz.app.models.User;
import com.stringwiz.app.web.ProfileDto;
import com.stringwiz.app.web.ProfileFileDto;
import com.stringwiz.app.web.UserPlatformDto;

public class UserPlatformDtoConverter {
    public static UserPlatformDto convertToDto(User user) {
        Profile profile = user.getProfile();
        ProfileDto profileDto = null;

        if (profile != null) {
            ProfileFile profileFile = profile.getProfileFile();
            ProfileFileDto profileFileDto = profileFile != null ? new ProfileFileDto(
                    profileFile.getBase64Data(),
                    profileFile.getName(),
                    profileFile.getType()
            ) : null;

            profileDto = new ProfileDto(
                    profile.getColor(),
                    profileFileDto,
                    profile.getType()
            );
        }

        return new UserPlatformDto(
                user.getFullName(),
                user.getEmail(),
                user.getPicture(),
                profileDto
        );
    }
}