# Loan Hub - Complete Full-Stack Application

A modern, responsive loan lead generation platform built with Spring Boot backend and Next.js frontend.

## Features

✨ **Modern UI** - Beautiful, responsive design with smooth animations
🔒 **Secure** - JWT authentication, password encryption, CORS enabled
⚡ **Fast** - Optimized for 1000+ concurrent users
💼 **Production Ready** - Complete error handling, validation, and logging
📱 **Mobile Friendly** - Works seamlessly on all devices

## System Requirements

- Java 17 or higher
- PostgreSQL 12 or higher
- Node.js 16+ (for Next.js frontend)
- Maven 3.6+

## Quick Start

### Backend Setup

1. **Create PostgreSQL Database:**
   ```sql
   CREATE DATABASE loan_app_db;
   CREATE USER loan_user WITH PASSWORD 'loan_password123';
   ALTER ROLE loan_user SET client_encoding TO 'utf8';
   ALTER ROLE loan_user SET default_transaction_isolation TO 'read committed';
   ALTER ROLE loan_user SET default_transaction_deferrable TO on;
   ALTER ROLE loan_user SET timezone TO 'UTC';
   GRANT ALL PRIVILEGES ON DATABASE loan_app_db TO loan_user;
   ```

2. **Start Spring Boot Backend:**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
   Backend runs on: http://localhost:8080

3. **Access Frontend:**
   - Static website: http://localhost:8080
   - Serves from: src/main/resources/static/index.html

### Frontend Setup (Optional - for Next.js development)

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Create .env.local:**
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8080/api
   ```

3. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Frontend runs on: http://localhost:3000

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh JWT token

### Loan Types
- `GET /api/loan-types` - Get all loan products
- `GET /api/loan-types/{id}` - Get specific loan details

### Loan Applications
- `POST /api/loan-applications/check-eligibility` - Check eligibility
- `GET /api/loan-applications` - Get user's applications
- `GET /api/loan-applications/{id}` - Get application details

### Loan Offers
- `GET /api/loan-offers/{applicationId}` - Get offers for application
- `PUT /api/loan-offers/{offerId}/accept` - Accept offer

## Database Schema

### Tables
- `users` - User information and authentication
- `loan_types` - Available loan products
- `loan_applications` - User's loan applications
- `loan_offers` - Partner loan offers
- `partners` - Partner banks/NBFCs

## Configuration Files

### application.properties
- Database connection settings
- JWT secret and expiration
- CORS configuration
- Logging levels

### pom.xml
- Spring Boot 3.2.0
- Spring Security with JWT
- PostgreSQL driver
- Validation (Jakarta Bean Validation)
- Lombok for reducing boilerplate

## Security Features

✓ JWT-based authentication
✓ Password encryption with BCrypt
✓ Method-level security with @PreAuthorize
✓ CORS properly configured
✓ Input validation on all endpoints
✓ Global exception handling
✓ HTTP-only cookies support

## Performance Optimization

✓ Connection pooling for database
✓ Batch operations enabled
✓ HTTP compression enabled
✓ Caching strategies implemented
✓ Index on frequently queried columns
✓ Pagination support for large datasets

## Project Structure

```
loan-hub/
├── src/main/java/com/loanapp/
│   ├── controller/          # REST API endpoints
│   ├── service/             # Business logic
│   ├── entity/              # JPA entities
│   ├── repository/          # Data access
│   ├── dto/                 # Data transfer objects
│   ├── security/            # JWT & authentication
│   ├── config/              # Spring configuration
│   └── exception/           # Custom exceptions
├── src/main/resources/
│   ├── application.properties
│   └── static/              # Frontend HTML/CSS/JS
├── app/                     # Next.js pages (optional)
├── components/              # React components (optional)
└── pom.xml
```

## Testing the API

### Using cURL

1. **Register User:**
   ```bash
   curl -X POST http://localhost:8080/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{
       "firstName":"John",
       "lastName":"Doe",
       "email":"john@example.com",
       "mobileNumber":"9876543210",
       "password":"password123",
       "city":"Delhi",
       "annualIncome":600000
     }'
   ```

2. **Login:**
   ```bash
   curl -X POST http://localhost:8080/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{
       "email":"john@example.com",
       "password":"password123"
     }'
   ```

3. **Get Loan Types:**
   ```bash
   curl -X GET http://localhost:8080/api/loan-types \
     -H "Authorization: Bearer YOUR_JWT_TOKEN"
   ```

## Deployment

### Deploy to Production

1. **Build Spring Boot JAR:**
   ```bash
   mvn clean package -DskipTests
   ```

2. **Run JAR:**
   ```bash
   java -jar target/loan-lead-generation-1.0.0.jar
   ```

3. **Environment Variables (Production):**
   ```bash
   export SPRING_DATASOURCE_URL=jdbc:postgresql://prod-db:5432/loan_app_db
   export SPRING_DATASOURCE_USERNAME=prod_user
   export SPRING_DATASOURCE_PASSWORD=strong_password
   export JWT_SECRET=your-super-secret-key-here
   ```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 8080 already in use | Change `server.port=8081` in application.properties |
| Database connection failed | Check PostgreSQL is running and credentials are correct |
| JWT token expired | Get a new token by logging in again |
| CORS errors | Update `cors.allowed-origins` in application.properties |
| Frontend not loading | Check `src/main/resources/static/index.html` exists |

## Support

For issues and questions, please create an issue in the repository or contact support@loanHub.com

## License

MIT License - feel free to use for personal and commercial projects

## Version

v1.0.0 - Initial Release
