package com.stringwiz.app.models;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;
import java.util.Date;
import java.util.LinkedHashSet;
import java.util.Set;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
@Entity()
@Table(name = "tags_dim")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    private String color;

    @ManyToMany(mappedBy = "tags", fetch = FetchType.LAZY)
    private Set<Task> tasks = new LinkedHashSet<>();

    @CreationTimestamp
    @Column(name="created_on",nullable = false)
    private Timestamp createdOn;

    public Tag(String name, String color) {
        setName(name);
        setColor(color);
        Timestamp currentTime = new Timestamp(new Date().getTime());
        setCreatedOn(currentTime);
    }
}
