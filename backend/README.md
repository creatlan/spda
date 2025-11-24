# WorkPlan Backend API

Python FastAPI backend for the WorkPlan shift management system.

## Features

- ✅ JWT-based authentication
- ✅ User profile management
- ✅ Shift management (calendar, next shift, replacement requests)
- ✅ History and statistics
- ✅ Availability management
- ✅ Schedule viewing
- ✅ RESTful API with automatic OpenAPI documentation

## Prerequisites

- Python 3.9 or higher
- pip (Python package manager)

## Installation

1. **Clone the repository** (if not already done):
   ```bash
   cd /path/to/spda/spda/backend
   ```

2. **Create a virtual environment** (recommended):
   ```bash
   python3 -m venv venv
   ```

3. **Activate the virtual environment**:
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```

4. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

5. **Set up environment variables**:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file and update the following:
   - `SECRET_KEY`: Generate a secure random string for JWT tokens
   - `CORS_ORIGINS`: Add your frontend URL(s)
   - `DATABASE_URL`: Keep SQLite for development or change to PostgreSQL for production

## Running the Server

### Development Mode (with auto-reload)

```bash
python main.py
```

Or using uvicorn directly:

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The server will start on `http://localhost:8000`

### Production Mode

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --workers 4
```

## API Documentation

Once the server is running, you can access:

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc
- **OpenAPI JSON**: http://localhost:8000/openapi.json

## Database

The application uses SQLite by default (for development). The database file `workplan.db` will be created automatically on first run.

### Database Schema

- **users**: User accounts and profiles
- **shifts**: Shift records
- **availability**: User availability statuses
- **replacement_requests**: Shift replacement requests

### Initializing Sample Data

To populate the database with sample data for testing, you can create a script or use the API endpoints directly.

Example: Create a user and shifts using the API or a database seeding script.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get JWT token
- `POST /api/auth/logout` - Logout

### Profile
- `GET /api/profile` - Get current user profile
- `PUT /api/profile` - Update user profile
- `DELETE /api/profile` - Delete user account (and all related data)

### Shifts
- `GET /api/shifts?month={0-11}&year={YYYY}` - Get shifts for a month
- `GET /api/shifts/{shiftId}` - Get a specific shift by ID
- `POST /api/shifts` - Create a new shift
- `PUT /api/shifts/{shiftId}` - Update a shift
- `DELETE /api/shifts/{shiftId}` - Delete a shift
- `GET /api/shifts/next` - Get next upcoming shift
- `POST /api/shifts/find-replacement` - Request shift replacement

### Replacement Requests
- `GET /api/shifts/replacement-requests` - Get all replacement requests for current user
- `GET /api/shifts/replacement-requests/{requestId}` - Get a specific replacement request
- `PUT /api/shifts/replacement-requests/{requestId}` - Update replacement request status
- `DELETE /api/shifts/replacement-requests/{requestId}` - Cancel/delete replacement request

### History
- `GET /api/history/all-time` - Get all-time statistics
- `GET /api/history/month?month={0-11}&year={YYYY}` - Get monthly statistics

### Statistics
- `GET /api/stats/current-month` - Get current month stats

### Availability
- `GET /api/availability?startDate={YYYY-MM-DD}&days={N}` - Get availability statuses
- `PUT /api/availability` - Update availability status
- `DELETE /api/availability?date={YYYY-MM-DD}&timeSlot={morning|afternoon|evening}` - Delete availability entry
- `DELETE /api/availability?date={YYYY-MM-DD}&timeSlot={morning|afternoon|evening}` - Delete availability entry

### Schedule
- `GET /api/schedule/day?date={YYYY-MM-DD}` - Get daily schedule for all staff

## Authentication

All protected endpoints require a Bearer token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

To get a token, use the `/api/auth/login` endpoint with user credentials.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `HOST` | Server host | `0.0.0.0` |
| `PORT` | Server port | `8000` |
| `DEBUG` | Debug mode | `False` |
| `CORS_ORIGINS` | Allowed CORS origins | `http://localhost:5173` |
| `DATABASE_URL` | Database connection string | `sqlite:///./workplan.db` |
| `SECRET_KEY` | JWT secret key | (required) |
| `ACCESS_TOKEN_EXPIRE_MINUTES` | Token expiration | `43200` (30 days) |

## Development

### Project Structure

```
backend/
├── main.py                 # FastAPI application entry point
├── app/
│   ├── __init__.py
│   ├── database.py         # Database configuration
│   ├── auth.py             # Authentication utilities
│   ├── models/             # SQLAlchemy models
│   │   ├── __init__.py
│   │   ├── user.py
│   │   ├── shift.py
│   │   └── availability.py
│   └── routers/            # API route handlers
│       ├── __init__.py
│       ├── auth.py
│       ├── profile.py
│       ├── shifts.py
│       ├── history.py
│       ├── stats.py
│       ├── availability.py
│       └── schedule.py
├── requirements.txt        # Python dependencies
├── .env.example           # Environment variables template
└── README.md              # This file
```

### Adding New Endpoints

1. Create or update a router file in `app/routers/`
2. Import and include the router in `main.py`
3. Add authentication if needed using `Depends(get_current_user)`

### Database Migrations

For production, consider using Alembic for database migrations:

```bash
pip install alembic
alembic init alembic
```

## Testing

You can test the API using:

1. **Swagger UI** (http://localhost:8000/docs) - Interactive API testing
2. **curl**:
   ```bash
   # Register a new user
   curl -X POST "http://localhost:8000/api/auth/register" \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Иван Иванов",
       "email": "ivan@example.com",
       "password": "password123",
       "position": "Официант",
       "phone": "+7 (999) 123-45-67"
     }'
   
   # Login
   curl -X POST "http://localhost:8000/api/auth/login" \
     -H "Content-Type: application/json" \
     -d '{"email": "ivan@example.com", "password": "password123"}'
   
   # Get profile (replace TOKEN with actual token from login response)
   curl -X GET "http://localhost:8000/api/profile" \
     -H "Authorization: Bearer TOKEN"
   
   # Create a shift
   curl -X POST "http://localhost:8000/api/shifts" \
     -H "Authorization: Bearer TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
       "date": "2024-11-25",
       "type": "day",
       "startTime": "09:00",
       "endTime": "15:00",
       "hours": 6.0,
       "earnings": 4075.0,
       "position": "Официант"
     }'
   
   # Update a shift
   curl -X PUT "http://localhost:8000/api/shifts/shift-123" \
     -H "Authorization: Bearer TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"earnings": 5000.0}'
   
   # Delete a shift
   curl -X DELETE "http://localhost:8000/api/shifts/shift-123" \
     -H "Authorization: Bearer TOKEN"
   
   # Delete availability entry
   curl -X DELETE "http://localhost:8000/api/availability?date=2024-11-25&timeSlot=morning" \
     -H "Authorization: Bearer TOKEN"
   ```

3. **Postman** or any HTTP client

## Production Deployment

### Using PostgreSQL

1. Update `DATABASE_URL` in `.env`:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/workplan
   ```

2. Install PostgreSQL adapter:
   ```bash
   pip install psycopg2-binary
   ```

### Using Docker

Create a `Dockerfile`:

```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Build and run:
```bash
docker build -t workplan-backend .
docker run -p 8000:8000 --env-file .env workplan-backend
```

### Security Considerations

- ✅ Change `SECRET_KEY` to a strong random value
- ✅ Use HTTPS in production
- ✅ Set `DEBUG=False` in production
- ✅ Use environment variables for sensitive data
- ✅ Implement rate limiting
- ✅ Add input validation and sanitization
- ✅ Use PostgreSQL or another production database
- ✅ Implement password hashing (bcrypt) for user passwords - **DONE**

## Troubleshooting

### Port already in use
```bash
# Find process using port 8000
lsof -i :8000

# Kill the process or use a different port
uvicorn main:app --port 8001
```

### Database errors
- Make sure the database file has write permissions
- For PostgreSQL, check connection string and database exists

### CORS errors
- Update `CORS_ORIGINS` in `.env` to include your frontend URL
- Restart the server after changing `.env`

## License

See LICENSE file in the project root.

## Support

For issues or questions, please refer to the main project documentation or create an issue in the repository.

