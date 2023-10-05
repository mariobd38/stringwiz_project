package com.stringwiz.app.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name="roles_dim")
public class Role {
//    USER, ADMIN
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false)
    private Long id;

    @Column(nullable=false, unique=true)
    private String name;

    @JsonIgnore
    @ManyToMany(mappedBy="roles")
    private List<User> users;

    public enum RoleNames {
        ADMIN, USER
    }

    public Role(String name) {
        this.name = name;
    }

    public Role(Role.RoleNames roleNames) {

    }
}
