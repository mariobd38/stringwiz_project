package com.stringwiz.app.web;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.antlr.v4.runtime.misc.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserRegistrationDto {
//    @NonNull
//    @NotEmpty
    private String email;

//    @Size(min = 8,message = "Invalid password. Must be at least 8 characters long.")
    @NonNull
    String password;
}
