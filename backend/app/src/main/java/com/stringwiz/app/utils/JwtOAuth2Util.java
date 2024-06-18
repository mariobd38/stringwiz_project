package com.stringwiz.app.utils;

import com.stringwiz.app.services.GooglePublicKeysService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwsHeader;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SigningKeyResolverAdapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.security.PublicKey;
import java.util.Map;

@Component
public class JwtOAuth2Util {
    @Autowired private GooglePublicKeysService googlePublicKeysService;

    public Map<String,String> getUserDataFromToken(String token) {
        return Map.of(
                "email",extractAllClaims(token).get("email").toString(),
                "fullName",extractAllClaims(token).get("name").toString(),
                "firstName",extractAllClaims(token).get("given_name").toString(),
                "lastName",extractAllClaims(token).get("family_name").toString(),
                "picture",extractAllClaims(token).get("picture").toString()
        );
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
            .setSigningKeyResolver(new SigningKeyResolverAdapter() {
                @Override
                public Key resolveSigningKey(JwsHeader header, Claims claims) {
                    String kid = header.getKeyId();
                    Map<String, PublicKey> publicKeys = googlePublicKeysService.getPublicKeys();
                    return publicKeys.get(kid);
                }
            })
            .build()
            .parseClaimsJws(token)
            .getBody();
    }
}
