package com.stringwiz.app.web;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserRegistrationDto {
    @NonNull
    private String fullName;
    @NonNull
    private String email;
    @NonNull
    private String password;
}
