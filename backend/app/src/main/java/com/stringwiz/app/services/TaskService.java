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
            existingTask.setName(task.getName());
            existingTask.setDescription(task.getDescription());
            existingTask.setDueDate(task.getDueDate());
            existingTask.setPriority(task.getPriority());
            existingTask.setStatus(task.getStatus());
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
