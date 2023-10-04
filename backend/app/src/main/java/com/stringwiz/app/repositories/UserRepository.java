package com.stringwiz.app.repositories;

import com.stringwiz.app.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
//    Optional<User> findbyEmail(String email);
}
