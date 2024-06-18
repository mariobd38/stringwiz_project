package com.stringwiz.app.controllers;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

@Controller
@RequestMapping("/api")
public class FileUploadController {

    @Value("${mockapi.upload.url}")
    private String mockapiUploadUrl;

    private final RestTemplate restTemplate;

    public FileUploadController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
//            System.out.println(file.getName());
//            MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
//            body.add("file", file.getResource());
//
//            ResponseEntity<String> response = restTemplate.postForEntity(mockapiUploadUrl, body, String.class);
//            System.out.println(response.getBody());
            MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
            body.add("file", file.getBytes());

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.MULTIPART_FORM_DATA);


            HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);
            System.out.println(requestEntity.getBody());
            ResponseEntity<String> response = restTemplate.exchange(mockapiUploadUrl, HttpMethod.POST, requestEntity, String.class);
            return new ResponseEntity<>(response.getBody(), response.getStatusCode());
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}