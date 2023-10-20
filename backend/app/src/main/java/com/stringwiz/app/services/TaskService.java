package com.stringwiz.app.services;

import com.stringwiz.app.models.Task;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

//    @Bean
    public Task save(User user, Task task) {
        System.out.println("status " + task.getStatus());
        System.out.println("priority " + task.getPriority());
        Task taskDetails = new Task(task.getName(),task.getDescription(),task.getStatus(), task.getPriority(), user, task.getDueDate());
        return taskRepository.save(taskDetails);
    }

    public List<Task> get(User user) {
        List<Task> userTasks = taskRepository.findByUser(user);
        for(Task task : userTasks) {
            System.out.println("task " + task.getName());
        }
        return userTasks;
    }

}
