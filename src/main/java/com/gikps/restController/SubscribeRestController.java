/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gikps.restController;

import com.gikps.domain.Subscribe;
import com.gikps.repository.SubscribeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author angelis
 */
@RestController
@RequestMapping("/api")
public class SubscribeRestController {
    
    @Autowired SubscribeRepository subscribeRepository;
    
    @PostMapping("/subscribe")
    public Subscribe subscribe( @RequestBody Subscribe subscribe){
        return subscribeRepository.save(subscribe);
    }
    
}
