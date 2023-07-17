package com.evepsyche.hiyeo.api;

import com.evepsyche.hiyeo.entity.Accommodation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccommodationRepository extends JpaRepository<Accommodation, Long> {
}
