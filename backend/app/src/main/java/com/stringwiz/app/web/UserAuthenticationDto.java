package com.stringwiz.app.web;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserAuthenticationDto {
//    @NonNull
//    @NotEmpty
    private String email;

//    @Size(min = 8,message = "Invalid password. Must be at least 8 characters long.")
    @NonNull
    String password;
}
