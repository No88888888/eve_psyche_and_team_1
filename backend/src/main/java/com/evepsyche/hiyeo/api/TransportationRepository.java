package com.evepsyche.hiyeo.api;

import com.evepsyche.hiyeo.entity.Transportation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransportationRepository extends JpaRepository<Transportation, Long> {
}
