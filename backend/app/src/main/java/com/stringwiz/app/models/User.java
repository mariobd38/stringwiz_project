package com.stringwiz.app.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.stringwiz.app.utils.RoleSelectorUtil;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Entity()
@Table(name = "users_dim")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false)
    private Long id;

    @Column(name = "first_name")
    @Setter private String firstName;

    @Column(name = "last_name")
    @Setter private String lastName;

    @Column(name = "full_name")
    private String fullName;

    @Column(nullable = false,unique = true)
    private String email;

    @Column
    private String password;

    @Column
    private String picture;

    @CreationTimestamp
    @Column(name="created_on")
    private Timestamp createdOn;

    @UpdateTimestamp
    @Column(name="last_updated_on")
    private Timestamp lastUpdatedOn;

    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Task> tasks = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Tag> tags = new LinkedHashSet<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comments;


    @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER, cascade= CascadeType.ALL)
    @JoinTable(
            name="users_roles",
            joinColumns={@JoinColumn(name="USER_ID", referencedColumnName="ID")},
            inverseJoinColumns={@JoinColumn(name="ROLE_ID", referencedColumnName="ID")})
    private List<Role> roles = new ArrayList<>();

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public User(String fullName, String email, String password, String picture) {
        this.fullName = fullName.replaceAll("\\s+", " ");
        setFirstName();
        setLastName();
        this.email = email;
        this.password = password;
        this.picture = picture;
        Timestamp currentTime = new Timestamp(new Date().getTime());
        this.createdOn = currentTime;
        this.lastUpdatedOn = currentTime;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<Role.RoleNames> roleNames = new RoleSelectorUtil().getRolesFromEmail(email);
        List<SimpleGrantedAuthority> result = new ArrayList<>();
        for(Role.RoleNames roleName : roleNames) {
            result.add(new SimpleGrantedAuthority(roleName.name()));
        }
        return result;
//        return List.of(new SimpleGrantedAuthority(Role.RoleNames.USER.name()),new SimpleGrantedAuthority(Role.RoleNames.USER.name()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    private void setFirstName() {
        this.firstName = fullName.substring(0,fullName.lastIndexOf(" "));
    }

    private void setLastName() {
        this.lastName = fullName.substring(fullName.lastIndexOf(" ")+1);
    }
}
