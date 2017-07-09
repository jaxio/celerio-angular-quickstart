/*
 * 
 * Source code generated by Celerio, an Open Source code generator by Jaxio.
 * Template pack-angular:src/main/java/domain/Entity.java.e.vm
 */
package com.mycompany.myapp.domain;

import static javax.persistence.GenerationType.IDENTITY;

import java.io.Serializable;
import java.time.Instant;
import java.util.logging.Logger;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.google.common.base.MoreObjects;
import com.google.common.base.Objects;

@Entity
@Table(name = "temp_reading")
public class TempReading implements Identifiable<Long>, Serializable {
    private static final long serialVersionUID = 1L;
    private static final Logger log = Logger.getLogger(TempReading.class.getName());

    // Raw attributes
    private Long id;
    private Instant dateRecorded;
    private Float reading;
    private String tempType;

    // Many to one
    private Device deviceFk;

    @Override
    public String entityClassName() {
        return TempReading.class.getSimpleName();
    }

    // -- [id] ------------------------

    @Override
    @Column(name = "id", precision = 19)
    @GeneratedValue(strategy = IDENTITY)
    @Id
    public Long getId() {
        return id;
    }

    @Override
    public void setId(Long id) {
        this.id = id;
    }

    public TempReading id(Long id) {
        setId(id);
        return this;
    }

    @Override
    @Transient
    public boolean isIdSet() {
        return id != null;
    }
    // -- [dateRecorded] ------------------------

    @Column(name = "date_recorded", length = 19)
    public Instant getDateRecorded() {
        return dateRecorded;
    }

    public void setDateRecorded(Instant dateRecorded) {
        this.dateRecorded = dateRecorded;
    }

    public TempReading dateRecorded(Instant dateRecorded) {
        setDateRecorded(dateRecorded);
        return this;
    }
    // -- [reading] ------------------------

    @Digits(integer = 12, fraction = 0)
    @NotNull
    @Column(name = "reading", nullable = false, precision = 12)
    public Float getReading() {
        return reading;
    }

    public void setReading(Float reading) {
        this.reading = reading;
    }

    public TempReading reading(Float reading) {
        setReading(reading);
        return this;
    }
    // -- [tempType] ------------------------

    @Size(max = 255)
    @Column(name = "temp_type")
    public String getTempType() {
        return tempType;
    }

    public void setTempType(String tempType) {
        this.tempType = tempType;
    }

    public TempReading tempType(String tempType) {
        setTempType(tempType);
        return this;
    }

    // -----------------------------------------------------------------
    // Many to One support
    // -----------------------------------------------------------------

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // many-to-one: TempReading.deviceFk ==> Device.id
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    @NotNull
    @JoinColumn(name = "device_fk", nullable = false)
    @ManyToOne
    public Device getDeviceFk() {
        return deviceFk;
    }

    /**
     * Set the {@link #deviceFk} without adding this TempReading instance on the passed {@link #deviceFk}
     */
    public void setDeviceFk(Device deviceFk) {
        this.deviceFk = deviceFk;
    }

    public TempReading deviceFk(Device deviceFk) {
        setDeviceFk(deviceFk);
        return this;
    }

    /**
     * Apply the default values.
     */
    public TempReading withDefaults() {
        return this;
    }

    /**
     * Equals implementation using a business key.
     */
    @Override
    public boolean equals(Object other) {
        return this == other || (other instanceof TempReading && hashCode() == other.hashCode());
    }

    private IdentifiableHashBuilder identifiableHashBuilder = new IdentifiableHashBuilder();

    @Override
    public int hashCode() {
        return identifiableHashBuilder.hash(log, this);
    }

    /**
     * Construct a readable string representation for this TempReading instance.
     * @see java.lang.Object#toString()
     */
    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this) //
                .add("id", getId()) //
                .add("dateRecorded", getDateRecorded()) //
                .add("reading", getReading()) //
                .add("tempType", getTempType()) //
                .toString();
    }
}