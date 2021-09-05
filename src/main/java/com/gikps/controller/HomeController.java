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
        return "portfolio-details";
    }
    
    @GetMapping("/comingSoon")
    public String toInnerPage(){
        return "coming-soon";
    }
    
    @GetMapping("/aboutUs")
    public String toAboutUs (){
        return "index";
    }
    
    @GetMapping("/services")
    public String toServices(){
        return"index";
    }
    
    @GetMapping("/team")
    public String toTeam(){
        return "index";
    }
    
    @GetMapping("/contactUs")
    public String toContactUs(){
        return "index";
    }
}
