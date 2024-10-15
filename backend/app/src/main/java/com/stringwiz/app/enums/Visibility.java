package com.stringwiz.app.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import com.stringwiz.app.models.Space;

public enum Visibility {
    PERSONAL,
    PUBLIC,

    PRIVATE;

    @JsonCreator
    public static Visibility fromString(String value) {
        return Visibility.valueOf(value.toUpperCase());
    }

    @JsonValue
    public String toValue() {
        return name().toLowerCase(); // Optional: if you want to serialize it as lowercase
    }
}
