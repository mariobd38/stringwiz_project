package com.stringwiz.app.services;

import com.stringwiz.app.models.Space;
import com.stringwiz.app.models.SpaceIcon;
import com.stringwiz.app.models.User;
import com.stringwiz.app.repositories.SpaceRepository;
import com.stringwiz.app.repositories.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class SpaceService {
    @Autowired private SpaceRepository spaceRepository;
    @Autowired private UserRepository userRepository;

    @Transactional
    public Space save(User user, Space space) {
        try {
            Optional<User> optionalUser = userRepository.findById(user.getId());
            if (optionalUser.isPresent()) {
                User currentUser = optionalUser.get();

                Space spaceDetails = new Space(space.getName(), space.getDescription(), space.getIcon(),
                        space.getVisibility());

                currentUser.addSpace(spaceDetails);
                userRepository.save(currentUser);
                return spaceDetails;
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        throw new NoSuchElementException("User not found");

    }
}
