package com.stringwiz.app.validations;

import com.stringwiz.app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class UserRegistrationDataValidation extends EmailRegexValidation {
    @Autowired UserRepository userRepository;
    public boolean validateNewUser(String email) {
        return userRepository.findByEmail(email).isEmpty();
    }
    public boolean validateFullName(String fullName) {
        return fullName.split("\\s+").length > 1;
    }

    public boolean validatePasswords(String password, String confirmPassword) {
        return password != null && password.equals(confirmPassword);
    }

    public boolean passwordsMatch(String password, String confirmPassword) {
        return (password.length() >= 8 && confirmPassword.length() >= 8);
    }
}
