# Stage 1: Build the Java app using Maven + Eclipse Temurin 17
FROM maven:3.9.4-eclipse-temurin-17 AS build

# Set working directory
WORKDIR /app

# Copy Maven files and download dependencies
COPY pom.xml ./
RUN mvn dependency:go-offline -B

# Copy source code and package the app
COPY src ./src
RUN mvn clean package -DskipTests

# Stage 2: Run the Java app using Eclipse Temurin 17 JRE
FROM eclipse-temurin:17-jre

# Set working directory
WORKDIR /app

# Copy the built JAR from the build stage
COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar app.jar

# Expose backend port
EXPOSE 8080

# Start the Spring Boot app
CMD ["java", "-jar", "app.jar"]

