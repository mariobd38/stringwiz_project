package com.stringwiz.app.repositories;

import com.stringwiz.app.models.Profile;
import com.stringwiz.app.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, String> {
    Profile findByUser(User user);
}