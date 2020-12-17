/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gikps.restController;

import com.gikps.domain.Message;
import com.gikps.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 *
 * @author angelis
 */
@RestController
@RequestMapping("api")
public class HomeRestController {
    
    @Autowired MessageRepository messageRepository;

@PostMapping("/sendMessage")
public Message sendAMessage(@RequestBody Message message){
    return messageRepository.save(message);
}



    
}
