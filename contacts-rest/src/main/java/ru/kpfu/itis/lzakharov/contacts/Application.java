package ru.kpfu.itis.lzakharov.contacts;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration;

import static org.springframework.boot.SpringApplication.run;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
public class Application {
    public static void main(String[] args) {
        run(Application.class, args);
    }
}