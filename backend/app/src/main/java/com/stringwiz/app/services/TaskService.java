package com.stringwiz.app.services;

import com.stringwiz.app.models.Task;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public Task save(User user, Task task) {
        Task taskDetails = new Task(task.getName(),task.getDescription(),task.getStatus(), task.getPriority(), user, task.getDueDate(), task.getDueDateTime());

        return taskRepository.save(taskDetails);
    }

    public List<Task> get(User user) {
        List<Task> taskList = taskRepository.findByUser(user);
        for(int i = 0; i < taskList.size();i++) {
            Task currentTask = taskList.get(i);
            if (currentTask.getDueDate() != null) {
                DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;
                ZonedDateTime z = ZonedDateTime.parse(currentTask.getDueDate().toString(), formatter.withZone(ZoneId.of("UTC")));
                ZoneId pstZone = ZoneId.systemDefault();
                ZonedDateTime dueDatesPst = z.withZoneSameInstant(pstZone);

                currentTask.setDueDate(dueDatesPst);
            }
        }
        return taskList;
    }
    public Task update(Task task) {
        System.out.println("UPDATE CALLED");
        try {
            Task existingTask = taskRepository.findById(task.getId()).orElse(null);
            assert existingTask != null;
            existingTask.setName(task.getName());
            existingTask.setDescription(task.getDescription());
            existingTask.setDueDate(task.getDueDate());
            System.out.println(task.getDueDateTime());
            existingTask.setDueDateTime(task.getDueDateTime());
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
