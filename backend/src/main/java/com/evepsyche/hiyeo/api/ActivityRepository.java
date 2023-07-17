package com.evepsyche.hiyeo.api;

import com.evepsyche.hiyeo.entity.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRepository extends JpaRepository<Activity, Long> {
}
