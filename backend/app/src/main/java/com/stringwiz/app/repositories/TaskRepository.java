package com.stringwiz.app.repositories;

import com.stringwiz.app.models.Task;
import com.stringwiz.app.models.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByUser(User user);
    @EntityGraph(attributePaths = "tags")
    Optional<Task> findById(Long id);
}
