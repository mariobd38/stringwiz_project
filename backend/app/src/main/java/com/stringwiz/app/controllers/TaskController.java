package com.stringwiz.app.controllers;

import com.stringwiz.app.models.Task;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.UserRepository;
import com.stringwiz.app.services.TaskService;
import com.stringwiz.app.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
//@RequestMapping("/api/tasks")
public class TaskController {
    @Autowired TaskService taskService;
    @Autowired UserRepository userRepository;
    @Autowired JwtUtil jwtUtil;
    @Value("${JWT_COOKIE_ATTRIBUTE_NAME}")
    private String JWT_COOKIE_NAME;

    @PostMapping("/api/tasks/create")
    public ResponseEntity<?> createTask(@AuthenticationPrincipal User user, @RequestBody Task task) {
        try {
            Task newTask = taskService.save(user, task);
            return ResponseEntity.ok(newTask);
        } catch (Exception e) {
            return ResponseEntity.ok(new Task());
        }
    }

    @GetMapping("/api/tasks/get")
    public ResponseEntity<?> getTasks(@CookieValue(name = "${JWT_COOKIE_ATTRIBUTE_NAME}", required = false) String jwt) {
        if (jwt == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("JWT token not found in cookie");
        }
        try {
            Optional<User> optionalUser = userRepository.findByEmail(jwtUtil.getUserEmailFromToken(jwt));
            if (optionalUser.isPresent()) {
                List<Task> tasks = taskService.get(optionalUser.get());
                return ResponseEntity.ok(tasks);
            }
            throw new NullPointerException("User does not exist");
        } catch(NullPointerException e) {
            throw new NullPointerException("Task does not exist");
        }
    }

    @PutMapping("/api/tasks/put")
    public ResponseEntity<?> updateTask(@RequestBody Task task) {
        Task myTask = taskService.update(task);
        return ResponseEntity.ok(myTask);
    }

    @DeleteMapping("/api/tasks/delete")
    public ResponseEntity<?> deleteTask(@RequestBody Task task) {
        taskService.delete(task);
        return ResponseEntity.noContent().build();
    }
}
