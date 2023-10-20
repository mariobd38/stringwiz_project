package com.stringwiz.app.controllers;

import com.stringwiz.app.models.Task;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.UserRepository;
import com.stringwiz.app.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.beans.factory.annotation.Value;

import java.util.List;

@Controller
//@RequestMapping("/api/tasks")
public class TaskController {
    @Autowired TaskService taskService;
    @Autowired UserRepository userRepository;
    @Value("${baseUrl}")
    private String baseUrl;

    @PostMapping("/api/tasks")
    public ResponseEntity<?>  createTask(@AuthenticationPrincipal User user, @RequestHeader("Authorization") String authorization, @RequestBody Task task) {
//        Task task1 = new Task(task.getName(),task.getDescription(),task.getStatus(), task.getPriority(), task.getDueDate());
        try {
            Task newTask = taskService.save(user, task);
            return ResponseEntity.ok(newTask);
        } catch (Exception e) {
            return ResponseEntity.ok(new Task());
        }
    }

    @GetMapping("/api/tasks/get")
    public ResponseEntity<?> getTasks(@AuthenticationPrincipal User user) {
        List<Task> tasks = taskService.get(user);
        return ResponseEntity.ok(tasks);
    }

}
