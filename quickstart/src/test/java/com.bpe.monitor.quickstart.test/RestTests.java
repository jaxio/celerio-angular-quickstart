package com.bpe.monitor.quickstart.test;

import com.bpe.monitor.Application;
import com.bpe.monitor.dto.AccountDTO;
import org.apache.coyote.http11.Constants;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.jdbc.EmbeddedDatabaseConnection;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Java6Assertions.assertThat;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class, webEnvironment = RANDOM_PORT)
@ActiveProfiles("test")
//@DataJpaTest
@AutoConfigureTestDatabase(connection = EmbeddedDatabaseConnection.H2)
public class RestTests {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void testFileWrite() throws Exception {
        AccountDTO accountDTO = new AccountDTO();
        accountDTO.email = "polinchw@netscape.net";
        accountDTO.firstName = "Bill";
        accountDTO.lastName = "Polinchak";
        accountDTO.password = "password";

        String body = this.restTemplate.postForObject("/api/accounts", accountDTO, String.class);
        assertThat(body).contains("Request Received Successfully");
    }
}
