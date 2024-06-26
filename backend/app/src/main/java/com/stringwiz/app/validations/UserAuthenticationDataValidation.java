package com.stringwiz.app.validations;

import org.springframework.stereotype.Component;

@Component
public class UserAuthenticationDataValidation extends EmailRegexValidation {
    public boolean emailOrPasswordMissing(String email, String password) {
        return email.isEmpty() || password.isEmpty();
    }
}
