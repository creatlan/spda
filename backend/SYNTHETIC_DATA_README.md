# Synthetic Data Generation Script

This script generates realistic test data for the WorkPlan backend, including users, shifts, availability entries, and replacement requests.

## Usage

```bash
cd backend
python generate_synthetic_data.py
```

## What it generates

- **Users**: 50 users by default (configurable)
  - Random Russian names
  - Email addresses
  - Phone numbers (70% have phones for profile completion testing)
  - Various positions (Хостес, Официант, Бармен, etc.)
  - Default password: `password123` for all test users

- **Shifts**: Historical shifts for the last 6 months (configurable)
  - 4-12 shifts per user per month
  - Mix of day and night shifts
  - Realistic hours (6-8 hours)
  - Earnings calculated based on hours and rate

- **Availability**: Availability entries for the last 90 days
  - 10-30 dates per user
  - Random time slots (morning, afternoon, evening)
  - Various statuses (free, inconvenient, unavailable, shift-day, shift-evening)

- **Replacement Requests**: 15% of shifts have replacement requests
  - Mix of approved, pending, and rejected statuses
  - Random reasons (or no reason)
  - Created a few days before the shift date

## Configuration

The script will prompt you for:
- Number of users (default: 50)
- Months of historical data (default: 6)
- Average shifts per user per month (default: 8)
- Whether to clear existing data

## Example Output

```
============================================================
WorkPlan Synthetic Data Generator
============================================================

This will generate synthetic test data. Continue? (yes/no): yes
Number of users to create (default 50): 50
Months of historical data (default 6): 6
Average shifts per user per month (default 8): 8

Clear existing data? (yes/no, default no): yes
Clearing existing data...
✓ Cleared existing data
Creating 50 users...
✓ Created 50 users
Creating shifts for last 6 months...
✓ Created 2400 shifts
Creating availability entries for last 180 days...
✓ Created 1250 availability entries
Creating replacement requests...
✓ Created 360 replacement requests

============================================================
Summary:
  Users: 50
  Shifts: 2400
  Availability entries: 1250
  Replacement requests: 360
============================================================

✓ Synthetic data generation complete!

Note: All test users have password 'password123'
```

## Testing Metrics

After generating data, you can test all the metrics endpoints:

```bash
# Get dashboard summary
curl -H "Authorization: Bearer YOUR_TOKEN" http://localhost:8000/api/metrics/dashboard

# Get active users
curl -H "Authorization: Bearer YOUR_TOKEN" http://localhost:8000/api/metrics/users/active?days=30

# Get shifts trend
curl -H "Authorization: Bearer YOUR_TOKEN" http://localhost:8000/api/metrics/analytics/shifts-trend?months=6
```

## Notes

- All dates are in the past (no future shifts)
- Data is realistic but randomized
- You can run the script multiple times (it will add to existing data unless you choose to clear)
- Default password for all users: `password123`

