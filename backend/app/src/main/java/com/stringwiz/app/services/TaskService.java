package com.stringwiz.app.services;

import com.stringwiz.app.models.Task;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.TaskRepository;
import jakarta.validation.constraints.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

//    @Bean
    public Task save(User user, Task task) {
        Task taskDetails = new Task(task.getName(),task.getDescription(),task.getStatus(), task.getPriority(), user, task.getDueDate());
        return taskRepository.save(taskDetails);
    }

    public List<Task> get(User user) {
        return taskRepository.findByUser(user);
    }
    public Task update(Task task) {
        Task existingTask = taskRepository.findById(task.getId()).orElse(null);
        try {
            assert existingTask != null;
            existingTask.setDueDate(task.getDueDate() != null ? task.getDueDate() : existingTask.getDueDate());
            existingTask.setPriority(task.getPriority() != null ? task.getPriority() : existingTask.getPriority());
            existingTask.setStatus(task.getStatus() != null ? task.getStatus() : existingTask.getStatus());
            return taskRepository.save(existingTask);
        } catch (NullPointerException npe) {
            throw new NullPointerException("Task does not exist");
        }
    }
}
