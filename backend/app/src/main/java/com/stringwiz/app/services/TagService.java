package com.stringwiz.app.services;

import com.stringwiz.app.models.Tag;
import com.stringwiz.app.models.Task;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.TagRepository;
import com.stringwiz.app.repositories.TaskRepository;
import com.stringwiz.app.repositories.UserRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.hibernate.Hibernate;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.proxy.HibernateProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;

@Service
@Transactional
public class TagService {
    @Autowired
    private TagRepository tagRepository;
    @Autowired
    private TaskRepository taskRepository;

    public Tag create(Tag tag, Long task_id) {
        try {
            Optional<Task> optionalTask = taskRepository.findById(task_id);
            if (optionalTask.isPresent()) {
                Task currentTask = optionalTask.get();
                Tag newTag = new Tag(tag.getName(), tag.getColor());


                //currentTask.getTags().add(newTag);
                //taskRepository.save(currentTask);

                Set<Tag> tags = currentTask.getTags();
                tags.add(tag);
                currentTask.setTags(tags);

                taskRepository.save(currentTask);


                return newTag;
            }
        } catch(IllegalArgumentException e) {
            throw new IllegalArgumentException("Tag '" + tag.getName() + "' already exists.");
        }
        throw new NoSuchElementException("Task not found");
    }

    @Transactional
    public Tag add(Long task_id, Long tag_id) {
        try {
            Optional<Task> optionalTask = taskRepository.findById(task_id);
            Optional<Tag> optionalTag = tagRepository.findById(tag_id);
            if (optionalTask.isPresent()) {
                Task currentTask = optionalTask.get();

                //Hibernate.initialize(currentTask.getTags());
                //Set<Tag> tags = currentTask.getTags();
                //System.out.println(tags.size());

                Tag tag = tagRepository.getReferenceById(tag_id);

                if (tag instanceof HibernateProxy) {
                    tag = (Tag) ((HibernateProxy) tag).getHibernateLazyInitializer()
                            .getImplementation();
                }

//                currentTask.getTags().add(tag);
//                taskRepository.save(currentTask);

                return tag;
            }
        } catch(IllegalArgumentException e) {
//            throw new IllegalArgumentException("Tag '" + tag.getName() + "' already exists.");
        }
        throw new NoSuchElementException("Task not found");
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

    private String printTagData(Set<Tag> tags) {
        StringBuilder sb = new StringBuilder();
        for(Tag tag : tags) {
            sb.append("Tag #").append(tag.getId()).append("\n");
            sb.append("\tName: ").append(tag.getName()).append("\n");
            sb.append("\tTasks:").append("\n");
            Set<Task> tasks = tag.getTasks();
            for(Task task : tasks) {
                sb.append("\t\t").append(task.getName()).append("\n");
            }
        }
        return sb.toString();
    }

    private String printTaskData(Task task) {
        StringBuilder sb = new StringBuilder();
//        for(Task task : tasks) {
            sb.append("Tag #").append(task.getId()).append("\n");
            sb.append("\tName: ").append(task.getName()).append("\n");
            sb.append("\tPriority: ").append(task.getPriority()).append("\n");
            sb.append("\tStatus: ").append(task.getStatus()).append("\n");
            sb.append("\tTags:").append("\n");
            Set<Tag> tags = task.getTags();
            for(Tag tag : tags) {
                sb.append("\t\t").append(tag.getId()).append("\n");
                sb.append("\t\t").append(tag.getName()).append("\n");
            }
//        }
        return sb.toString();
    }

    /*
    @Autowired
    private TagRepository tagRepository;
    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private UserRepository userRepository;
    @PersistenceContext
    private EntityManager entityManager;

    public Tag create(Tag tag, Task task) {
        try {
            Optional<Task> optionalTask = taskRepository.findById(task.getId());
            if (optionalTask.isPresent()) {
                Task currentTask = optionalTask.get();
                Tag tagDetails = new Tag(tag.getName(), tag.getColor());
                tagRepository.save(tagDetails);
                currentTask.getTags().add(tagDetails);
                taskRepository.save(currentTask);
                return tagDetails;
            }
        } catch(IllegalArgumentException e) {
            throw new IllegalArgumentException("Tag '" + tag.getName() + "' already exists.");
        }
        throw new NoSuchElementException("Task not found");
    }

    public Tag addTag(Tag tag, Task task) {
        Optional<Task> optionalTask = taskRepository.findById(task.getId());
        if(optionalTask.isPresent()) {
            Task currentTask = optionalTask.get();
            try {
                Tag tagDetails = tagRepository.findById(tag.getId()).orElseThrow();
                currentTask.getTags().add(tagDetails);
                taskRepository.save(currentTask);
                return tagDetails;
            } catch(Exception e) {
                throw new IllegalArgumentException("Tag '" + tag.getName() + "' is a duplicate entry.");
            }
        }
        throw new NoSuchElementException("Task not found for the given task_id: " + task.getId());
    }

    public Set<Tag> getByTask(Long task_id) {
        Optional<Task> optionalTask = taskRepository.findById(task_id);
        if(optionalTask.isPresent()) {
            Task t = optionalTask.get();
//            System.out.println("task name " + t.getName());
//            for(Tag tag : tagRepository.findByTasks(optionalTask.get())) {
//                System.out.println(tag.getName());
//            }
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

    @Transactional
    public Set<Tag> removeTag(User user, Tag tag, Task task) {
        Optional<Task> optionalTask = taskRepository.findById(task.getId());

        try {
            if(optionalTask.isPresent()) {
                Task currentTask = optionalTask.get();
                System.out.println("new query!");
                System.out.println("-----START-----");

                System.out.println(task.getName());
                System.out.println(tag.getName());


                System.out.println(task.getTags().size());
                System.out.println(currentTask.getTags().size());
                task.getTags().remove(tag);
                taskRepository.save(task);


                System.out.println("-----END-----");
                return task.getTags();

            }
        } catch(IllegalArgumentException e) {
            throw new IllegalArgumentException("Tag not found for the given task_id: " + task.getId());
        }
        throw new NoSuchElementException("Request to remove tag from given task id '" + task.getId() + "' could not be processed");
    }

    public void delete(Tag tag) {
        tagRepository.delete(tag);
    }*/

}
