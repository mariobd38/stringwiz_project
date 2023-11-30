package com.stringwiz.app.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
public class TagColorsUtil {
    List<String> colors = new ArrayList<>();

    public TagColorsUtil() {
        this.colors = getColors();
    }


    public void ex() {
        System.out.println(colors.get(0));
    }

    private List<String> getColors() {
        //colors from https://www.flatuicolorpicker.com/
        return List.of(
                "#0b7fab",      //blue chill
                          "#89c4f4",      //jordy blue
                          "#36d7b7",      //turquoise
                          "#b7f4d8",      //magic mint
                          "#26c281",      //jungles green
                          "#d2d7d3",      //pumice
                          "#8e44ad",      //studio
                          "#f9bf3b",      //sandstorm
                          "#e67e22",      //carrot orange
                          "#efcfe3",      //Lacquer Mauve
                          "#d5b8ff",      //Mauve
                          "#a537fd",      //electric purple
                          "#e76d89",      //deep blush
                          "#d64541",      //valencia
                          "#ffff9f"       //canary
        );
    }

}
