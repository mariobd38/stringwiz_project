package com.stringwiz.app.services;

import com.stringwiz.app.models.Tag;
import com.stringwiz.app.models.Task;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.TagRepository;
import com.stringwiz.app.repositories.TaskRepository;
import jakarta.persistence.EntityGraph;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.Set;

@Service
@Transactional
public class TagService {
    @Autowired
    private TagRepository tagRepository;
    @Autowired
    private TaskRepository taskRepository;

    public Tag create(User user, Tag tag, Long task_id) {
        try {
            Optional<Task> optionalTask = taskRepository.findById(task_id);
            if (optionalTask.isPresent()) {
                Tag tagDetails = new Tag(tag.getName(), tag.getColor());
                Tag savedTag = tagRepository.save(tagDetails);
                Task currentTask = optionalTask.get();

                currentTask.getTags().add(savedTag);
                taskRepository.save(currentTask);
                return savedTag;
            }
        } catch(IllegalArgumentException e) {
            throw new IllegalArgumentException("Tag '" + tag.getName() + "' already exists.");
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
            Set<Tag> myTags = optionalTask.get().getTags();
            for(Tag tag: myTags) {
                System.out.println(tag.getName());
            }
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

    public Set<Tag> removeTag(Tag tag, Long task_id) {
        Optional<Task> optionalTask = taskRepository.findById(task_id);
        try {
            if(optionalTask.isPresent()) {

                Task currentTask = optionalTask.get();
                System.out.println(currentTask.getTags().size());
                return currentTask.getTags();
            }
        } catch(IllegalArgumentException e) {
            throw new IllegalArgumentException("Tag not found for the given task_id: " + task_id);
        }
        throw new NoSuchElementException("Request to remove tag from given task id '" + task_id + "' could not be processed");
    }

    public void delete(Tag tag) {
        tagRepository.delete(tag);
    }

//    private Set<String> getAllTagNames(User user) {
//        List<Task> tasks = taskRepository.findByUser(user);
//        Set<String> allTagNames = new LinkedHashSet<>();
//        for(Task task : tasks) {
//            Set<Tag> tags = getByTask(task.getId());
//            for(Tag tag : tags) {
//                allTagNames.add(tag.getName());
//            }
//        }
//        return allTagNames;
//    }
}
