FROM eclipse-temurin:17-jre-jammy

WORKDIR /app

COPY build/libs/application.jar app.jar

EXPOSE 5001

ENTRYPOINT ["java", "-Xms64m", "-Xmx256m", "-jar", "app.jar"]