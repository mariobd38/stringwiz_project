package com.stringwiz.app.repositories;

import com.stringwiz.app.models.ProfileFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository extends JpaRepository<ProfileFile, String> {
}
