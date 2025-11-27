# Standalone Admin Dashboard

The dashboard has been separated from the main app and is now a standalone application with admin authentication.

## Setup

### 1. Create Admin User

First, create the admin user in the backend:

```bash
cd backend
python create_admin_user.py
```

This creates an admin user with:
- **Email**: `admin@workplan.local`
- **Password**: `admin123`
- **User ID**: `admin-000000000000`

### 2. Start Backend

```bash
cd backend
python main.py
```

### 3. Start Frontend

```bash
cd frontend
npm install  # If not already done
npm run dev
```

## Accessing the Dashboard

### Option 1: Direct URL (Recommended)

Once the dev server is running, access the dashboard at:

```
http://localhost:5173/dashboard.html
```

### Option 2: Via Route (if configured)

You can also add a route in your main app to redirect to the dashboard.

## How It Works

1. **Separate Entry Point**: The dashboard uses `dashboard.html` and `dashboard-main.tsx` as its entry point
2. **Admin Authentication**: 
   - Automatically attempts to login as admin (`admin@workplan.local` / `admin123`)
   - Stores admin token separately from regular user tokens
   - Falls back to bypass mode if admin user doesn't exist (for development)
3. **Isolated from Main App**: 
   - Removed from BottomNav
   - Removed from main App.tsx routes
   - Uses separate authentication flow

## Files Changed

### Removed from Main App
- ✅ Dashboard removed from `App.tsx`
- ✅ Dashboard removed from `BottomNav.tsx`

### New Files Created
- `frontend/dashboard.html` - Dashboard HTML entry point
- `frontend/src/dashboard-main.tsx` - Dashboard React entry point
- `frontend/src/pages/DashboardApp.tsx` - Dashboard wrapper with admin auth
- `frontend/src/pages/DashboardApp.css` - Auth screen styles
- `backend/create_admin_user.py` - Script to create admin user

### Modified Files
- `frontend/vite.config.ts` - Added multi-entry point support
- `frontend/src/utils/api.ts` - Added admin token support

## Admin Authentication Flow

1. Dashboard loads → `DashboardApp.tsx`
2. Checks for existing admin token
3. If no token, attempts login with admin credentials
4. Stores admin token in `localStorage` as `admin_token`
5. All API calls use admin token automatically
6. If login fails, allows bypass (development mode)

## Security Notes

- **Production**: Remove the bypass fallback in `DashboardApp.tsx`
- **Admin Password**: Change default password in production
- **Token Storage**: Admin tokens are stored separately from user tokens
- **Access Control**: Consider adding IP whitelist or additional auth checks

## Troubleshooting

### Dashboard shows "Authenticating..." forever
- Check backend is running
- Verify admin user exists: `python backend/create_admin_user.py`
- Check browser console for errors

### "Access Denied" error
- Make sure admin user exists
- Check admin credentials are correct
- Verify backend API is accessible

### Dashboard not loading
- Check `dashboard.html` exists in frontend root
- Verify `dashboard-main.tsx` exists
- Check Vite config has multi-entry point setup

## Development vs Production

### Development
- Bypass mode enabled if admin login fails
- Admin credentials hardcoded
- Easy access for testing

### Production
- Remove bypass fallback
- Use environment variables for admin credentials
- Add additional security layers (IP whitelist, 2FA, etc.)

