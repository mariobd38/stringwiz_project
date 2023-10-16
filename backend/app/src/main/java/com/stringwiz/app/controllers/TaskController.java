package com.stringwiz.app.controllers;

import com.stringwiz.app.models.Task;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.TaskRepository;
import com.stringwiz.app.repositories.UserRepository;
import com.stringwiz.app.services.TaskService;
import com.stringwiz.app.web.UserAuthenticationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@Controller
//@RequestMapping("/api/tasks")
public class TaskController {
    @Autowired TaskService taskService;
    @Autowired UserRepository userRepository;

    @PostMapping("/api/tasks")
    public ResponseEntity<?>  createTask(@AuthenticationPrincipal User user, @RequestHeader("Authorization") String authorization) {
        try {
            Task newTask = taskService.save(user);
            return ResponseEntity.ok(newTask);
        } catch (Exception e) {
            return ResponseEntity.ok(new Task());
        }
    }

}
