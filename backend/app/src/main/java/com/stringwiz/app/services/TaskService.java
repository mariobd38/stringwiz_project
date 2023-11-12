package com.stringwiz.app.services;

import com.stringwiz.app.models.Task;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

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

        try {
            Task existingTask = taskRepository.findById(task.getId()).orElse(null);
            assert existingTask != null;
            existingTask.setName(task.getName() != null ? task.getName() : existingTask.getName());
            existingTask.setDueDate(task.getDueDate() != null ? task.getDueDate() : existingTask.getDueDate());
            existingTask.setPriority(task.getPriority() != null ? task.getPriority() : existingTask.getPriority());
            existingTask.setStatus(task.getStatus() != null ? task.getStatus() : existingTask.getStatus());
            existingTask.setLastUpdatedOn(new Timestamp(new Date().getTime()));
            return taskRepository.save(existingTask);
        } catch (NullPointerException npe) {
            throw new NullPointerException("Task does not exist");
        }
    }

    public void delete(Task task) {
        taskRepository.deleteById(task.getId());
    }
}
