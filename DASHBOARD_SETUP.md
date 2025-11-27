# Dashboard & Synthetic Data Setup

## Overview

This document describes the dashboard implementation and synthetic data generation script that have been added to the WorkPlan project.

## Dashboard

### Location
- **Frontend**: `frontend/src/pages/Dashboard.tsx`
- **Styles**: `frontend/src/pages/Dashboard.css`
- **API Utils**: `frontend/src/utils/api.ts`

### Features

The dashboard displays comprehensive metrics with interactive charts:

1. **Key Metrics Cards**
   - Total Users (with 30-day active count)
   - Total Shifts (with monthly count)
   - Total Earnings (with monthly earnings)
   - Replacement Requests (with success rate)

2. **Charts**
   - **Shifts Trend**: 6-month line chart showing shift creation trends
   - **Shifts by Type**: Pie chart showing day vs night shift distribution
   - **Weekend vs Weekday**: Bar chart comparing weekend and weekday shifts
   - **Availability Status**: Bar chart showing distribution of availability statuses
   - **Replacement Requests Performance**: Summary metrics

### Accessing the Dashboard

1. Start the backend:
   ```bash
   cd backend
   python main.py
   ```

2. Start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```

3. Navigate to the Dashboard tab in the bottom navigation

4. Make sure you're authenticated (the dashboard requires authentication)

### API Integration

The dashboard uses the metrics API endpoints:
- `/api/metrics/dashboard` - Summary dashboard data
- `/api/metrics/analytics/shifts-trend` - Monthly trends
- `/api/metrics/shifts/by-type` - Shift type distribution
- `/api/metrics/shifts/weekend-vs-weekday` - Weekend analysis
- `/api/metrics/availability/status-distribution` - Availability stats
- `/api/metrics/replacement-requests/performance` - Request performance

### Environment Variables

Create a `.env` file in the frontend directory (or set in your environment):

```env
VITE_API_BASE_URL=http://localhost:8000
```

## Synthetic Data Generator

### Location
- **Script**: `backend/generate_synthetic_data.py`
- **Documentation**: `backend/SYNTHETIC_DATA_README.md`

### Usage

```bash
cd backend
python generate_synthetic_data.py
```

### What It Generates

- **50 Users** (configurable)
  - Random Russian names and emails
  - Various positions
  - 70% have complete profiles (with phone numbers)
  - Default password: `password123`

- **~2400 Shifts** (for 6 months, configurable)
  - Mix of day and night shifts
  - Realistic hours and earnings
  - Historical data going back 6 months

- **~1250 Availability Entries**
  - Random dates over last 90 days
  - Various time slots and statuses

- **~360 Replacement Requests**
  - 15% of shifts have requests
  - Mix of approved/pending/rejected statuses

### Testing with Synthetic Data

After generating data:

1. **Login as a test user**:
   - Email: `ivan.ivanov0@example.com` (or any generated email)
   - Password: `password123`

2. **View Dashboard**:
   - Navigate to Dashboard tab
   - See all metrics populated with realistic data

3. **Test Metrics Endpoints**:
   ```bash
   # Get token first via login
   TOKEN="your_jwt_token"
   
   # Test dashboard
   curl -H "Authorization: Bearer $TOKEN" http://localhost:8000/api/metrics/dashboard
   
   # Test active users
   curl -H "Authorization: Bearer $TOKEN" http://localhost:8000/api/metrics/users/active?days=30
   ```

## File Structure

```
frontend/
├── src/
│   ├── pages/
│   │   ├── Dashboard.tsx          # Dashboard component
│   │   └── Dashboard.css          # Dashboard styles
│   ├── utils/
│   │   └── api.ts                # API utility functions
│   ├── components/
│   │   └── BottomNav.tsx          # Updated with dashboard tab
│   └── App.tsx                    # Updated with dashboard route

backend/
├── generate_synthetic_data.py     # Data generation script
├── SYNTHETIC_DATA_README.md      # Script documentation
└── app/
    └── routers/
        └── metrics.py             # Metrics API endpoints
```

## Next Steps

1. **Generate Test Data**:
   ```bash
   cd backend
   python generate_synthetic_data.py
   ```

2. **Start Backend**:
   ```bash
   cd backend
   python main.py
   ```

3. **Start Frontend**:
   ```bash
   cd frontend
   npm run dev
   ```

4. **Login and View Dashboard**:
   - Use any generated user email
   - Password: `password123`
   - Navigate to Dashboard tab

## Customization

### Adjusting Data Volume

Edit `generate_synthetic_data.py` or use the interactive prompts:
- Number of users
- Months of historical data
- Shifts per user per month

### Adding More Metrics

1. Add endpoint in `backend/app/routers/metrics.py`
2. Add API call in `frontend/src/pages/Dashboard.tsx`
3. Add chart/display component

### Styling

Dashboard styles are in `frontend/src/pages/Dashboard.css`. The design follows the existing WorkPlan color scheme:
- Primary green: `#34c759`
- Background: `#f5f5f5`
- Cards: `#ffffff`
- Text: `#000000` / `#8e8e93`

## Troubleshooting

### Dashboard shows "Loading metrics..."
- Check that backend is running
- Verify authentication token is set
- Check browser console for API errors

### No data in charts
- Run the synthetic data generator
- Verify data was created in database
- Check API endpoints are returning data

### API errors
- Ensure backend is running on correct port (default: 8000)
- Check CORS settings in backend
- Verify authentication token is valid

