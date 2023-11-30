package com.stringwiz.app.services;

import com.stringwiz.app.models.Tag;
import com.stringwiz.app.models.Task;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.TagRepository;
import com.stringwiz.app.repositories.TaskRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
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


    public Set<Tag> getByTask(Long task_id) {
        Optional<Task> optionalTask = taskRepository.findById(task_id);
        if(optionalTask.isPresent()) {
            return tagRepository.findByTasks(optionalTask.get());
        }
        throw new IllegalArgumentException("Task not found for the given task_id: " + task_id);
    }

    public Set<Tag> getAllTags(User user) {
        List<Task> tasks = taskRepository.findByUser(user);
        Set<Tag> allTags = new LinkedHashSet<>();
        for(Task task : tasks) {
            Set<Tag> tags = getByTask(task.getId());
            allTags.addAll(tags);
        }
        return allTags;
    }

    public void removeTagFromTask(Tag tag, Long task_id) throws Exception {
        Optional<Task> optionalTask = taskRepository.findById(task_id);
        try {
            if(optionalTask.isPresent()) {
                Task currentTask = optionalTask.get();
                currentTask.getTags().remove(tag);
                taskRepository.save(currentTask);
            }
        } catch(IllegalArgumentException e) {
            throw new IllegalArgumentException("Tag not found for the given task_id: " + task_id);
        } catch(Exception e) {
            throw new Exception("Request to remove tag from given task id '" + task_id + "' could not be processed");
        }
    }


    private Set<String> getAllTagNames(User user) {
        List<Task> tasks = taskRepository.findByUser(user);
        Set<String> allTagNames = new LinkedHashSet<>();
        for(Task task : tasks) {
            Set<Tag> tags = getByTask(task.getId());
            for(Tag tag : tags) {
                allTagNames.add(tag.getName());
            }
        }
        return allTagNames;
    }
}
