package com.stringwiz.app.controllers;

import com.stringwiz.app.models.Tag;
import com.stringwiz.app.models.Task;
import com.stringwiz.app.repositories.UserRepository;
import com.stringwiz.app.services.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class TagController {
    @Autowired
    TagService tagService;
    @Autowired
    UserRepository userRepository;

    @PostMapping("/api/tags/create")
    public ResponseEntity<?> createTag(@RequestBody Tag tag, @RequestParam("taskId") Long task_id) {
        try {
            Tag newTag = tagService.create(tag, task_id);
            return ResponseEntity.ok(newTag);
        } catch (Exception e) {
            return ResponseEntity.ok(new Task());
        }
    }
}
