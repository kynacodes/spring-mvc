package com.kyna.springmvc.controller;

        import org.springframework.stereotype.Controller;
        import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TinettiController {
    @GetMapping("/tinetti")
    public String getTinetti(){
        return "tinetti.html";
    }
}
