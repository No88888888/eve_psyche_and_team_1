package com.evepsyche.hiyeo.api;

import com.evepsyche.hiyeo.entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepository extends JpaRepository<Food, Long> {
}
