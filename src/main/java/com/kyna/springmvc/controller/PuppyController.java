package com.kyna.springmvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PuppyController {
    @GetMapping("/puppy")
    public String getPuppy(){
        return "puppy.html";
    }
}
