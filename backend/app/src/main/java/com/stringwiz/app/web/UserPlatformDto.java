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
}
