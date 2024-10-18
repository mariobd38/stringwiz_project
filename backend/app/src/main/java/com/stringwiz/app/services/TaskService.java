package com.stringwiz.app.services;

import com.stringwiz.app.models.Space;
import com.stringwiz.app.models.Task;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.SpaceRepository;
import com.stringwiz.app.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    @Autowired private TaskRepository taskRepository;
    @Autowired private SpaceRepository spaceRepository;

    public Task save(User user, Task task) {
        Task taskDetails = new Task(task.getName(),task.getDescription(),task.getDescriptionHtml(), task.getStatus(),
                task.getPriority(), user, task.getDueDate(), task.getDueDateTime());
        return taskRepository.save(taskDetails);
    }

    public List<Task> get(User user) {
        List<Task> taskList = taskRepository.findByUser(user);
        taskList.forEach(this::convertTaskDueDateToSystemZone);
        return taskList;
    }

    public List<Task> getBySpace(User user, String spaceName) throws Exception {
        Optional<Space> optionalSpace = spaceRepository.findByName(spaceName);
        if (!optionalSpace.isPresent()) {
            throw new  Exception("Space not found with name: " + spaceName);
        }

        List<Task> taskList = taskRepository.findBySpace(optionalSpace.get());

        taskList.forEach(this::convertTaskDueDateToSystemZone);

        return taskList;
    }
    public Task update(Task task) {
        try {
            Task existingTask = taskRepository.findById(task.getId()).orElse(null);
            assert existingTask != null;
            existingTask.setName(task.getName());
            existingTask.setDescription(task.getDescription());
            existingTask.setDescriptionHtml(task.getDescriptionHtml());
            existingTask.setDueDate(task.getDueDate());
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

    private void convertTaskDueDateToSystemZone(Task task) {
        if (task.getDueDate() != null) {
            // Parse and convert the ZonedDateTime
            ZoneId pstZone = ZoneId.systemDefault();
            ZonedDateTime convertedDate = task.getDueDate().withZoneSameInstant(pstZone);
            task.setDueDate(convertedDate);
        }
    }
}
