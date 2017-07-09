/*
 * 
 * Source code generated by Celerio, an Open Source code generator by Jaxio.
 * Template pack-angular:src/main/java/security/AlwaysSendUnauthorized401AuthenticationEntryPoint.java.p.vm
 */
package com.mycompany.myapp.security;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// see https://github.com/jaxio/celerio-angular-quickstart/issues/20
// and
//     http://stackoverflow.com/questions/4269686/spring-security-need-403-error-not-redirect/30935622

@Component
public class AlwaysSendUnauthorized401AuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public final void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException {
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
    }
}
