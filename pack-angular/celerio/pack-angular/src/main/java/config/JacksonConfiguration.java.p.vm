## Copyright 2015 JAXIO http://www.jaxio.com
##
## Licensed under the Apache License, Version 2.0 (the "License");
## you may not use this file except in compliance with the License.
## You may obtain a copy of the License at
##
##    http://www.apache.org/licenses/LICENSE-2.0
##
## Unless required by applicable law or agreed to in writing, software
## distributed under the License is distributed on an "AS IS" BASIS,
## WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
## See the License for the specific language governing permissions and
## limitations under the License.
##
$output.java("${configuration.rootPackage}.config","JacksonConfiguration")##

import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;

@Configuration
public class JacksonConfiguration {
    public static final DateTimeFormatter LOCAL_DATE_TIME_FORMATTER = new DateTimeFormatterBuilder()
        .parseCaseInsensitive()
        .append(DateTimeFormatter.ISO_LOCAL_DATE)
        .appendLiteral(' ') // instead of 'T'
        .append(DateTimeFormatter.ISO_LOCAL_TIME)
        .toFormatter();

    @Bean
    Jackson2ObjectMapperBuilder jackson2ObjectMapperBuilder() {
        JavaTimeModule module = new JavaTimeModule();
        module.addDeserializer(LocalDateTime.class, new LocalDateTimeDeserializer(LOCAL_DATE_TIME_FORMATTER));
        module.addSerializer(LocalDateTime.class, new LocalDateTimeSerializer(LOCAL_DATE_TIME_FORMATTER));

        return new Jackson2ObjectMapperBuilder().featuresToDisable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS).findModulesViaServiceLoader(true)
            .modulesToInstall(module);
    }
}
