package com.stringwiz.app.controllers;

import com.stringwiz.app.models.Tag;
import com.stringwiz.app.models.Task;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.UserRepository;
import com.stringwiz.app.services.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Set;

@Controller
public class TagController {
    @Autowired
    TagService tagService;
    @Autowired
    UserRepository userRepository;

    @PostMapping("/api/tags/create")
    public ResponseEntity<?> createTag(@AuthenticationPrincipal User user, @RequestBody Tag tag, @RequestParam("taskId") Long task_id) {
        try {
            Tag newTag = tagService.create(user, tag, task_id);
            return ResponseEntity.ok(newTag);
        }
        catch (IllegalArgumentException iae) {
            System.out.println("Tag already exists!!");
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Tag already exists");
        }
        catch (Exception e) {
            return ResponseEntity.ok(new Task());
        }
    }

    @PutMapping("/api/tags/addTag")
    public ResponseEntity<?> addTagToTask(@RequestBody Tag tag, @RequestParam("taskId") Long task_id) {
        Tag addedTag = tagService.addTag(tag, task_id);
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
}
