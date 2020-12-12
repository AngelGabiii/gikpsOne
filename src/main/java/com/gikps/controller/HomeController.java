/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gikps.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 *
 * @author angelis
 */

@Controller
public class HomeController {
    
    @GetMapping({"/", "index.html", "index"})
    public String home(){
        return "index";
    }
    
    @GetMapping("/portfolio")
    public String toPortfolio(){
        return "porfolio-details";
    }
    
    @GetMapping("/innerpage")
    public String toInnerPage(){
        return "inner-page";
    }
}
