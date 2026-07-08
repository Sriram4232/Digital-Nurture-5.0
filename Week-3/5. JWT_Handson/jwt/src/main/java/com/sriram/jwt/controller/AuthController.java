package com.sriram.jwt.controller;


import com.sriram.jwt.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;

@RestController
public class AuthController {

    private final JwtUtil jwtUtil;

    public AuthController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(HttpServletRequest request) {

        String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            return ResponseEntity.status(401).build();
        }

        String base64Credentials = authHeader.substring("Basic ".length());
        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(decodedBytes);

        String[] values = credentials.split(":", 2);
        String username = values[0];
        String password = values[1];

        if (!username.equals("user") || !password.equals("pwd")) {
            return ResponseEntity.status(401).build();
        }

        String token = jwtUtil.generateToken(username);

        return ResponseEntity.ok("{\"token\":\"" + token + "\"}");
    }
}