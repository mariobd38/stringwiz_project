package com.stringwiz.app.controllers;

import com.stringwiz.app.models.Tag;
import com.stringwiz.app.models.User;
import com.stringwiz.app.services.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.Set;

@RestController
public class TagController {
    @Autowired TagService tagService;

    @PostMapping("/api/tags/create")
    public ResponseEntity<?> createTag(@RequestBody Tag tag, @RequestParam("taskId") Long task_id) {
        try {
            Tag newTag = tagService.create(tag, task_id);
            return ResponseEntity.ok(newTag);
        }
        catch (IllegalArgumentException iae) {
            System.out.println("Tag already exists!!");
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Tag already exists");
        }
    }

    @GetMapping("/api/tags/get")
    public ResponseEntity<?> getTags(@RequestParam("taskId") Long task_id) {
        Set<Tag> newTag = tagService.getByTask(task_id);
        return ResponseEntity.ok(newTag);
    }

    @GetMapping("/api/tags/getAll")
    public ResponseEntity<?> getAllTags(@AuthenticationPrincipal User user) {
        Set<Tag> allTags = tagService.getAllTags(user);
        return ResponseEntity.ok(allTags);
    }

    /*
    @Autowired
    TagService tagService;
    @Autowired
    UserRepository userRepository;
    @Autowired
    private ObjectMapper objectMapper;

    @PostMapping("/api/tags/create")
    public ResponseEntity<?> createTag(@RequestBody Map<String, Object> requestPayload) {
        try {
            Tag tag = (Tag)getTagTask(requestPayload).get(0);
            Task task = (Task)getTagTask(requestPayload).get(1);
            Tag newTag = tagService.create(tag, task);
            return ResponseEntity.ok(newTag);
        }
        catch (IllegalArgumentException iae) {
            System.out.println("Tag already exists!!");
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Tag already exists");
        }
        catch (Exception e) {
            System.out.println("exception here");
            return ResponseEntity.ok(new Task());
        }
    }

    @PutMapping("/api/tags/addTag")
    public ResponseEntity<?> addTagToTask(@RequestBody Map<String, Object> requestPayload) throws JsonProcessingException {
        Tag tag = (Tag)getTagTask(requestPayload).get(0);
        Task task = (Task)getTagTask(requestPayload).get(1);
        Tag addedTag = tagService.addTag(tag, task);
        return ResponseEntity.ok(addedTag);
    }

    @GetMapping("/api/tags/get")
    public ResponseEntity<?> getTags(@RequestParam("taskId") Long task_id) {
        Set<Tag> newTag = tagService.getByTask(task_id);
        return ResponseEntity.ok(newTag);
    }

    @GetMapping("/api/tags/getAll")
    public ResponseEntity<?> getAllTags(@AuthenticationPrincipal User user) {
        Set<Tag> allTags = tagService.getAllTags(user);
        return ResponseEntity.ok(allTags);
    }

    @DeleteMapping("/api/tags/remove")
    public ResponseEntity<?> remove(@AuthenticationPrincipal User user, @RequestBody Map<String, Object> requestPayload) throws JsonProcessingException {
        Tag tag = (Tag)getTagTask(requestPayload).get(0);
        Task task = (Task)getTagTask(requestPayload).get(1);
        Set<Tag> tags = tagService.removeTag(user, tag, task);
        System.out.println("log here");
        return ResponseEntity.ok(tags);
    }

    @DeleteMapping("/api/tags/delete")
    public ResponseEntity<?> delete(@RequestBody Tag tag) {
        tagService.delete(tag);
        return ResponseEntity.noContent().build();
    }

    private List<Object> getTagTask(Map<String, Object> requestPayload) throws JsonProcessingException {
        String taskJson = objectMapper.writeValueAsString(requestPayload.get("task"));
        Task task = objectMapper.readValue(taskJson, Task.class);
        String tagJson = objectMapper.writeValueAsString(requestPayload.get("tagInfo"));
        Tag tag = objectMapper.readValue(tagJson, Tag.class);

        return List.of(tag, task);
    }*/
}
