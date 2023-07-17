package com.evepsyche.hiyeo.api;

import com.evepsyche.hiyeo.entity.Accommodation;
import com.evepsyche.hiyeo.entity.Activity;
import com.evepsyche.hiyeo.entity.Food;
import com.evepsyche.hiyeo.entity.Transportation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
public class HanaController {

    private final AccommodationRepository accommodationRepository;
    private final ActivityRepository activityRepository;
    private final FoodRepository foodRepository;
    private final TransportationRepository transportationRepository;


    // 숙박시설 조회
    @GetMapping("/accommodation")
    public ResponseEntity<?> accommodationList() {
        List<Accommodation> list = accommodationRepository.findAll();
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i).toString());
        };
        return ResponseEntity.status(200).body(list);
    }

    // 교통수단 조회
    @GetMapping("/activity")
    public ResponseEntity<?> activityList() {
        List<Activity> list = activityRepository.findAll();
        return ResponseEntity.status(200).body(list);
    }

    // 음식 조회
    @GetMapping("/food")
    public ResponseEntity<?> foodList() {
        List<Food> list = foodRepository.findAll();
        return ResponseEntity.status(200).body(list);
    }

    // 액티비티 조회
    @GetMapping("/transportation")
    public ResponseEntity<?> transportationList() {
        List<Transportation> list = transportationRepository.findAll();
        return ResponseEntity.status(200).body(list);
    }
}
