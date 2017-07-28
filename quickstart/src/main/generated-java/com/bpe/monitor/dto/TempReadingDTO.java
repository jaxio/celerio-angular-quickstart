/*
 * 
 * Source code generated by Celerio, an Open Source code generator by Jaxio.
 * Template pack-angular:src/main/java/dto/EntityDTO.java.e.vm
 */
package com.bpe.monitor.dto;

import java.time.Instant;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Simple DTO for TempReading.
 */
public class TempReadingDTO {
    public Long id;
    public Instant dateRecorded;
    public Float reading;
    public String tempType;
    public DeviceDTO deviceFk;

    @JsonIgnore
    public boolean isIdSet() {
        return id != null;
    }
}