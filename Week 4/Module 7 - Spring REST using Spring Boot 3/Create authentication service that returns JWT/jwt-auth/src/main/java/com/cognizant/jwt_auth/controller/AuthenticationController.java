package com.cognizant.jwt_auth.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;
import java.util.Date;
import java.util.Map;

@RestController
public class AuthenticationController {

    private static final String SECRET_KEY = "secretkey";

    @GetMapping("/authenticate")
    public ResponseEntity<Map<String, String>> getToken(@RequestHeader(HttpHeaders.AUTHORIZATION) String authHeader) {
        String[] creds = new String(Base64.getDecoder().decode(authHeader.substring(6))).split(":");

        if (creds[0].equals("admin") && creds[1].equals("thiru@123")) {
            String token = Jwts.builder()
                    .setSubject(creds[0])
                    .setIssuedAt(new Date())
                    .setExpiration(new Date(System.currentTimeMillis() + 3600000))
                    .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                    .compact();

            return ResponseEntity.ok(Map.of("token", token));
        }

        return ResponseEntity.status(401).build();
    }
}
