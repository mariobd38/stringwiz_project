package com.stringwiz.app.services;


import com.stringwiz.app.models.Role;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.RoleRepository;
import com.stringwiz.app.repositories.UserRepository;
import com.stringwiz.app.utils.RoleSelectorUtil;
import com.stringwiz.app.validations.UserAuthenticationDataValidation;
import com.stringwiz.app.validations.UserRegistrationDataValidation;
import com.stringwiz.app.web.UserAuthenticationDto;
import com.stringwiz.app.web.UserRegistrationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CustomUserService implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired private RoleRepository roleRepository;
    @Autowired private PasswordEncoder passwordEncoder;
    @Autowired private UserRegistrationDataValidation registrationDataValidation;
    @Autowired private UserAuthenticationDataValidation authDataValidation;
    @Override
    public void saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        List<Role.RoleNames> roleNames = new RoleSelectorUtil().getRolesFromEmail(user.getEmail());
        List<Role> roleList = new ArrayList<>();
        for(Role.RoleNames names : roleNames) {
            String roleName = names.name();
            Role role = roleRepository.findByName(roleName);
            if (role == null) {
                Role r = new Role();
                r.setName(roleName);
                roleRepository.save(r);
                roleList.add(r);
            } else {
                roleList.add(role);
            }
        }
        user.setRoles(roleList);
        userRepository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByEmail(email);
        return user.orElseThrow(() -> new UsernameNotFoundException("Invalid username or password."));
    }

    public String userAuthenticationValidation(UserAuthenticationDto request) {
        String errorMessage = null;
        if (authDataValidation.emailOrPasswordMissing(request.getEmail(), request.getPassword())) {
            errorMessage = "Email and/or password is missing";
        } else if (!registrationDataValidation.validateEmail(request.getEmail())) {
            errorMessage = "Email is invalid";
        }
        return errorMessage;
    }

    public List<String> userRegistrationValidation(UserRegistrationDto request) {
        List<String> errorMessages = new ArrayList<>();
        if (!registrationDataValidation.validateNewUser(request.getEmail())) { //user already exists
            errorMessages.add("This account is already registered. Please login.");
        } else {
            if (!registrationDataValidation.validateFullName(request.getFullName())) { //user did not enter a first and last name
                errorMessages.add("First and last name are required.");
            }
            if (!registrationDataValidation.validateEmail(request.getEmail())) { //email format is invalid/missing
                errorMessages.add("Email is invalid or missing.");
            }
            if (!registrationDataValidation.validatePasswords(request.getPassword(), request.getConfirmPassword())) {
                errorMessages.add("Passwords do not match.");
            }
            if (!registrationDataValidation.passwordsMatch(request.getPassword(), request.getConfirmPassword())) {
                errorMessages.add("Password must be at least 8 characters long.");
            }
        }
        return errorMessages;
    }
}
