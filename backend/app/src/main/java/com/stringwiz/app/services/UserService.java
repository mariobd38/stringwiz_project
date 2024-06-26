package com.stringwiz.app.services;

import com.stringwiz.app.models.User;
import com.stringwiz.app.web.UserAuthenticationDto;
import com.stringwiz.app.web.UserRegistrationDto;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    void saveUser(User user);
}
