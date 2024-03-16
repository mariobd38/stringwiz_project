package com.stringwiz.app.utils;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Data
@AllArgsConstructor
public class TagColorsUtil {
    List<String> colors = new ArrayList<>();

    public TagColorsUtil() {
        this.colors = getColors();
    }


    public String sendRandomColor(List<String> existingColors) {
        List<String> availableColors = new ArrayList<>(colors);
        for(String color : existingColors) {
            availableColors.remove(color);
        }
        if (availableColors.isEmpty()) {
            int randomIndex = new Random().nextInt(colors.size());
            return colors.get(randomIndex);
        }

        int randomIndex = new Random().nextInt(availableColors.size());
        return availableColors.get(randomIndex);
    }

    private List<String> getColors() {
        return List.of(
                "#e65551",
                "#e76d89",
                "#ffc0cb",
                "#dfa0ab",
                "#dfaf2b",
                "#0ec9ad",
                "#0aa665",
                "#146882",
                "#0d6efd",
                "#8568af",
                "#c557ff",
                "#2c2d2f"
        );
    }

}
