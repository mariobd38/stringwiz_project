package com.stringwiz.app.validations;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class EmailRegexValidation {
    public final boolean validateEmail(String email) {
        final String REGEX_FORMAT = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$";
        Pattern pattern = Pattern.compile(REGEX_FORMAT);
        Matcher matcher = pattern.matcher(email);
        return matcher.matches();
    }
}
