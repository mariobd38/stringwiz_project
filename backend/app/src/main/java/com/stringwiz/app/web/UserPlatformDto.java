package com.stringwiz.app.web;

import com.stringwiz.app.models.Profile;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserPlatformDto {
    @NonNull
    private String fullName;
    @NonNull
    private String email;
    private String picture;
    private ProfileDto profileDto;

    public ProfileDto getProfileDto(Profile profile) {
        return new ProfileDto(
                profile.getColor(),
                new ProfileFileDto(
                        profile.getProfileFile().getBase64Data(),
                        profile.getProfileFile().getName(),
                        profile.getProfileFile().getType()
                ),
                profile.getType()
        );
    }
}
