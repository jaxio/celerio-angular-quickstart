/*
 * 
 * Source code generated by Celerio, an Open Source code generator by Jaxio.
 * Template pack-angular:src/main/java/domain/EntityMeta_.java.e.vm
 */
package com.bpe.monitor.domain;

import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@StaticMetamodel(Account.class)
public abstract class Account_ {

    // Raw attributes
    public static volatile SingularAttribute<Account, Long> id;
    public static volatile SingularAttribute<Account, String> email;
    public static volatile SingularAttribute<Account, String> firstName;
    public static volatile SingularAttribute<Account, String> lastName;
    public static volatile SingularAttribute<Account, String> password;
}