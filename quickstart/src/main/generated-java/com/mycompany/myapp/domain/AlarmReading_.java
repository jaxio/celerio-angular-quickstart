/*
 * 
 * Source code generated by Celerio, an Open Source code generator by Jaxio.
 * Template pack-angular:src/main/java/domain/EntityMeta_.java.e.vm
 */
package com.mycompany.myapp.domain;

import java.time.Instant;

import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@StaticMetamodel(AlarmReading.class)
public abstract class AlarmReading_ {

    // Raw attributes
    public static volatile SingularAttribute<AlarmReading, Long> id;
    public static volatile SingularAttribute<AlarmReading, Instant> dateRecorded;

    // Many to one
    public static volatile SingularAttribute<AlarmReading, Device> deviceFk;
    public static volatile SingularAttribute<AlarmReading, AlarmRule> ruleFk;
}