package com.ivo.novel_web_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NovelWebBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(NovelWebBackendApplication.class, args);
	}
	public void restartApplication() {
		SpringApplication.exit(SpringApplication.run(NovelWebBackendApplication.class));
		SpringApplication.run(NovelWebBackendApplication.class); // Tái khởi động ứng dụng
	}

}
