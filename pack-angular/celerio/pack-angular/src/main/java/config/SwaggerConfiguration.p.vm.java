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
$output.java("${configuration.rootPackage}.config","SwaggerConfiguration")##

$output.require("org.slf4j.LoggerFactory")##
$output.require("org.slf4j.Logger")##
$output.require("org.springframework.util.StopWatch")##

$output.require("org.springframework.context.annotation.*")##
$output.require("org.springframework.http.ResponseEntity")##

$output.require("springfox.documentation.spi.DocumentationType")##
$output.require("springfox.documentation.swagger2.annotations.EnableSwagger2")##
$output.require("springfox.documentation.spring.web.plugins.Docket")##
$output.require("springfox.documentation.builders.PathSelectors")##
$output.require("springfox.documentation.builders.RequestHandlerSelectors")##

@Configuration
@EnableSwagger2
public class SwaggerConfiguration {
    private final Logger log = LoggerFactory.getLogger(SwaggerConfiguration.class);

    @Bean
    public Docket swaggerSpringfoxDocket() {
        log.debug("Starting Swagger");
        StopWatch watch = new StopWatch();
        watch.start();
        Docket docket = new Docket(DocumentationType.SWAGGER_2).select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build()
                .pathMapping("/")
                .genericModelSubstitutes(ResponseEntity.class);
        watch.stop();
        log.debug("Started Swagger in {} ms", watch.getTotalTimeMillis());
        return docket;
    }


}
