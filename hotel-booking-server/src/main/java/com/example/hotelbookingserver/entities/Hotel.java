package com.example.hotelbookingserver.entities;

import jakarta.persistence.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
@Table(name = "hotels")
public class Hotel {
    @Id
    @GeneratedValue
    @UuidGenerator
    private UUID id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String address;

    private String thumbnail;

    private String linkMap;

    private String description;

    @Column(nullable = false)
    private float rate;

    public String getAddress() {
        return this.address;
    }

    public String getThumbnail() {
        return this.thumbnail;
    }

    public String getLinkMap() {
        return this.linkMap;
    }

    public String getDescription() {
        return this.description;
    }

    public float getRate() {
        return this.rate;
    }
}
