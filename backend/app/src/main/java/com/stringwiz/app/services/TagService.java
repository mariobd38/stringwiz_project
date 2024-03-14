package com.stringwiz.app.services;

import com.stringwiz.app.models.Tag;
import com.stringwiz.app.models.Task;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.TagRepository;
import com.stringwiz.app.repositories.TaskRepository;
import com.stringwiz.app.utils.TagColorsUtil;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
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
                Task currentTask = optionalTask.get();

                List<String> allTagColors = getAllTagColors(user);
                String tagColor = new TagColorsUtil().sendRandomColor(allTagColors);

                Tag newTag = new Tag(tag.getName(), tagColor, user);

                currentTask.addTag(newTag);
                taskRepository.save(currentTask);

                return newTag;
            }
        } catch(IllegalArgumentException e) {
            throw new IllegalArgumentException("Tag '" + tag.getName() + "' already exists.");
        }
        throw new NoSuchElementException("Task not found");
    }

    public Tag addExistingTag(Long task_id, Long tag_id) {
        try {
            Optional<Task> optionalTask = taskRepository.findById(task_id);
            Optional<Tag> optionalTag = tagRepository.findById(tag_id);
            if (optionalTask.isPresent() && optionalTag.isPresent()) {
                Task currentTask = optionalTask.get();
                Tag currentTag = optionalTag.get();

                currentTask.addTag(currentTag);
                taskRepository.save(currentTask);

                return currentTag;
            }
        } catch(IllegalArgumentException e) {
            throw new IllegalArgumentException("Tag with tag_id: '" + tag_id + "' already exists.");
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

    public List<Tag> getAllTags(User user) {
        return tagRepository.findByUser(user);
    }

    public void removeTag(Long tag_id, Long task_id) {
        Optional<Task> optionalTask = taskRepository.findById(task_id);
        Optional<Tag> optionalTag = tagRepository.findById(tag_id);

        try {
            if(optionalTask.isPresent() && optionalTag.isPresent()) {
                Task currentTask = optionalTask.get();
                Tag currentTag = optionalTag.get();

                currentTask.getTags().remove(currentTag);
                taskRepository.save(currentTask);
                return;
            }
        } catch(IllegalArgumentException e) {
            throw new IllegalArgumentException("Tag not found for the given task_id: " + task_id);
        }
        throw new NoSuchElementException("Request to remove tag from given task id '" + task_id + "' could not be processed");
    }

    public Tag update(Tag tag) {
        try {
            Tag existingTag = tagRepository.findById(tag.getId()).orElse(null);
            assert existingTag != null;

            existingTag.setName(tag.getName());
            existingTag.setColor(tag.getColor());
            existingTag.setLastUpdatedOn(new Timestamp(new Date().getTime()));
            return tagRepository.save(existingTag);
        } catch (NullPointerException npe) {
            throw new NullPointerException("Task does not exist");
        }
    }

    private List<String> getAllTagColors(User user) {
        List<String> allColors = new ArrayList<>();
        List<Tag> tags = tagRepository.findByUser(user);
        for(Tag tag : tags) {
            allColors.add(tag.getColor());
        }
        return allColors;
    }


    /*

    public void delete(Tag tag) {
        tagRepository.delete(tag);
    }*/

}
