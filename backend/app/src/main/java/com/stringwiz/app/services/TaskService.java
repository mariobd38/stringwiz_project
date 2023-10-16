package com.stringwiz.app.services;

import com.stringwiz.app.models.Task;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

//    @Bean
    public Task save(User user) {
        Task task = new Task();
        task.setUser(user); // Associate the task with the user
        task.setStatus("To do");
        return taskRepository.save(task);
    }

}
