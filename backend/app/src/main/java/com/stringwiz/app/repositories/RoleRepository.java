package com.stringwiz.app.repositories;

import com.stringwiz.app.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
