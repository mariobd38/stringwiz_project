package com.stringwiz.app.controllers;

import com.stringwiz.app.models.Task;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.UserRepository;
import com.stringwiz.app.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
//@RequestMapping("/api/tasks")
public class TaskController {
    @Autowired TaskService taskService;
    @Autowired UserRepository userRepository;

    @PostMapping("/api/tasks/create")
    public ResponseEntity<?>  createTask(@AuthenticationPrincipal User user, @RequestBody Task task) {
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
