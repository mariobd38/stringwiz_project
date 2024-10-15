package com.stringwiz.app.repositories;

import com.stringwiz.app.models.Space;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SpaceRepository extends JpaRepository<Space, Long> {
    List<Space> findByUsersId(Long userId);
}
