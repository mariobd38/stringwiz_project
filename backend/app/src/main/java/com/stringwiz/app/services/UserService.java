package com.stringwiz.app.services;

import com.stringwiz.app.models.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    void saveUser(User user);
}
