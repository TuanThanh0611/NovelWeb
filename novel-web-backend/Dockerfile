# Bước 1: Sử dụng OpenJDK 21 để build ứng dụng
FROM openjdk:21-slim AS build

# Cài đặt Maven
RUN apt-get update && apt-get install -y maven

# Tạo thư mục làm việc
WORKDIR /app

# Copy mã nguồn và các file cấu hình
COPY pom.xml .
COPY src ./src

# Build ứng dụng với Maven
RUN mvn clean package -DskipTests

# Bước 2: Sử dụng OpenJDK 21 để chạy ứng dụng
FROM openjdk:21-slim

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy file JAR đã build từ bước 1 vào container
COPY --from=build /app/target/novel-web-backend-0.0.1-SNAPSHOT.jar /app/novel-web-backend.jar

# Mở port 8080 cho ứng dụng Spring Boot
EXPOSE 8080

# Lệnh chạy ứng dụng Spring Boot
ENTRYPOINT ["java", "-jar", "/app/novel-web-backend.jar"]
