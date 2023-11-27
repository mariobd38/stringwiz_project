package com.stringwiz.app.services;

import com.stringwiz.app.models.Tag;
import com.stringwiz.app.models.Task;
import com.stringwiz.app.repositories.TagRepository;
import com.stringwiz.app.repositories.TaskRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TagService {
    @Autowired
    private TagRepository tagRepository;
    @Autowired
    private TaskRepository taskRepository;

    @Transactional
    public Tag create(Tag tag, Long task_id) {
        System.out.println(task_id);
        Optional<Task> optionalTask = taskRepository.findById(task_id);
        if(optionalTask.isPresent()) {
            Tag tagDetails = new Tag(tag.getName(),tag.getDescription(),tag.getColor());
            Tag savedTag = tagRepository.save(tagDetails);
            Task currentTask = optionalTask.get();
            currentTask.getTags().add(savedTag);
            taskRepository.save(currentTask);
            return savedTag;
        }
        throw new IllegalArgumentException("Task not found for the given task_id: " + task_id);
    }
}
