package com.stringwiz.app.repositories;

import com.stringwiz.app.models.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {
}
