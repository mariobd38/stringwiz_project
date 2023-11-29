package com.stringwiz.app.services;

import com.stringwiz.app.models.Tag;
import com.stringwiz.app.models.Task;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.TagRepository;
import com.stringwiz.app.repositories.TaskRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.HashSet;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.Set;

@Service
public class TagService {
    @Autowired
    private TagRepository tagRepository;
    @Autowired
    private TaskRepository taskRepository;

    @Transactional
    public Tag create(User user, Tag tag, Long task_id) {
        Set<String> allTagNames = getAllTagNames(user);
        if(allTagNames.contains(tag.getName())) {
            throw new IllegalArgumentException("Tag '" + tag.getName() + "' already exists.");
        }

        Optional<Task> optionalTask = taskRepository.findById(task_id);
        if(optionalTask.isPresent()) {
            Tag tagDetails = new Tag(tag.getName(),tag.getDescription(),tag.getColor());
            Tag savedTag = tagRepository.save(tagDetails);
            Task currentTask = optionalTask.get();
            currentTask.getTags().add(savedTag);
            taskRepository.save(currentTask);
            return savedTag;
        }
        throw new NoSuchElementException("Task not found for the given task_id: " + task_id);
    }

    public Tag addTag(Tag tag, Long task_id) {
        Optional<Task> optionalTask = taskRepository.findById(task_id);
        if(optionalTask.isPresent()) {
            Task task = optionalTask.get();
            try {
                task.getTags().add(tag);
                taskRepository.save(task);
                return tag;
            } catch(Exception e) {
                throw new IllegalArgumentException("Tag '" + tag.getName() + "' is a duplicate entry.");
            }


        }
        throw new NoSuchElementException("Task not found for the given task_id: " + task_id);
    }


    public Set<Tag> get(Long task_id) {
        Optional<Task> optionalTask = taskRepository.findById(task_id);
        if(optionalTask.isPresent()) {
            return tagRepository.findByTasks(optionalTask.get());
        }
        throw new IllegalArgumentException("Task not found for the given task_id: " + task_id);
    }

    public Set<Tag> getAllTags(User user) {
        List<Task> tasks = taskRepository.findByUser(user);
        Set<Tag> allTags = new HashSet<>();
        for(Task task : tasks) {
            Set<Tag> tags = get(task.getId());
            allTags.addAll(tags);
        }
        return allTags;
    }

    private Set<String> getAllTagNames(User user) {
        List<Task> tasks = taskRepository.findByUser(user);
        Set<String> allTagNames = new HashSet<>();
        for(Task task : tasks) {
            Set<Tag> tags = get(task.getId());
            for(Tag tag : tags) {
                allTagNames.add(tag.getName());
            }
        }
        return allTagNames;
    }
}
