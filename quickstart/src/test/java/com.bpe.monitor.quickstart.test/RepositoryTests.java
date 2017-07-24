package com.bpe.monitor.quickstart.test;

import com.bpe.monitor.domain.*;
import com.bpe.monitor.repository.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.jdbc.EmbeddedDatabaseConnection;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Created by polinchw on 6/10/17.
 */

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(connection = EmbeddedDatabaseConnection.H2)
public class RepositoryTests {

    private static Logger log = LoggerFactory.getLogger(RepositoryTests.class);

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    DeviceRepository deviceRepository;

    @Test
    public void testAccountInsert() throws Exception {
        Account account = new Account();
        account.setEmail("polinchw@gmail.com");
        account.setPassword("password");
        account.setFirstName("William");
        account.setLastName("Polinchak");
        entityManager.persist(account);
        Account accountFound = this.accountRepository.findByLastName("Polinchak");
        log.info("account inserted: "+accountFound);
        assertThat(accountFound.getLastName()).isEqualTo("Polinchak");
    }

    @Test
    public void testDeviceInsert() throws Exception {
        Account account = new Account();
        account.setEmail("polinchw@gmail.com");
        account.setPassword("password");
        account.setFirstName("William");
        account.setLastName("Polinchak");
        entityManager.persist(account);
        account = accountRepository.findByEmail("polinchw@gmail.com");
        Device device = new Device();
        device.setAccountFk(account);
        device.setDescription("monitors temperature");
        device.setName("temp monitor");
        entityManager.persist(device);
        device = deviceRepository.findOne(1l);
        log.info("device found: "+device);
        assertThat(device.getName()).isEqualTo("temp monitor");
    }

    @Test
    public void testFindDeviceByAccount() throws Exception {
        Account account = new Account();
        account.setEmail("polinchw@gmail.com");
        account.setPassword("password");
        account.setFirstName("William");
        account.setLastName("Polinchak");
        Device device = new Device();
        device.setAccountFk(account);
        device.setDescription("monitors temperature");
        device.setName("temp monitor");
        account.getDevices().add(device);
        entityManager.persist(account);
        account = accountRepository.findByEmail("polinchw@gmail.com");
        assertThat(account.getDevices().get(0).getName()).isEqualTo("temp monitor");
    }

    @Test
    public void testAddDeviceByAccount() throws Exception {
        Account account = new Account();
        account.setEmail("polinchw@gmail.com");
        account.setPassword("password");
        account.setFirstName("William");
        account.setLastName("Polinchak");
        entityManager.persist(account);
        Device device = new Device();
        device.setAccountFk(account);
        device.setDescription("monitors temperature");
        device.setName("temp monitor");
        device.setAccountFk(account);
        entityManager.persist(device);
        account = accountRepository.findByEmail("polinchw@gmail.com");
        log.info("account: "+account);
    }

    @Test
    public void testAddDeviceByAccountwithCascade() throws Exception {
        Account account = new Account();
        account.setEmail("polinchw@gmail.com");
        account.setPassword("password");
        account.setFirstName("William");
        account.setLastName("Polinchak");
        Device device = new Device();
        device.setAccountFk(account);
        device.setDescription("monitors temperature");
        device.setName("temp monitor");
        account.getDevices().add(device);
        entityManager.persist(account);
        account = accountRepository.findByEmail("polinchw@gmail.com");
        assertThat(account.getDevices().get(0).getName()).isEqualTo("temp monitor");
    }

}

