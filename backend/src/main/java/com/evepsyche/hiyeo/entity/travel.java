package com.evepsyche.hiyeo.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class travel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long travelId;
    private String name;
    private String image;
    private String category;
}
