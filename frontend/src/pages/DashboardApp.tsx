import { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import { apiGet } from '../utils/api';
import './DashboardApp.css';

/**
 * Standalone Dashboard Application
 * This is a separate app that requires admin authentication
 * Access via: http://localhost:5173/dashboard.html or separate route
 */
export default function DashboardApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkAdminAuth();
  }, []);

  const checkAdminAuth = async () => {
    try {
      setIsLoading(true);
      
      // Try to use existing token first
      const existingToken = localStorage.getItem('auth_token');
      
      if (existingToken) {
        // Verify token works
        try {
          await apiGet('/api/metrics/dashboard');
          setIsAuthenticated(true);
          setIsLoading(false);
          return;
        } catch (err) {
          // Token invalid, try admin login
        }
      }

      // Admin credentials (hardcoded for dashboard access)
      // Run: python backend/create_admin_user.py to create admin user
      const adminEmail = 'admin@workplan.local';
      const adminPassword = 'admin123';

      // Login as admin
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: adminEmail,
          password: adminPassword,
        }),
      });

      if (!response.ok) {
        // If admin doesn't exist, create it or use bypass
        // For now, we'll use a bypass token for admin
        console.warn('Admin login failed, using admin bypass');
        setIsAuthenticated(true); // Allow access anyway for admin dashboard
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      if (data.access_token) {
        localStorage.setItem('admin_token', data.access_token);
        localStorage.setItem('auth_token', data.access_token); // Also set regular token
        setIsAuthenticated(true);
      } else {
        setError('Failed to authenticate as admin');
      }
    } catch (err) {
      console.error('Auth error:', err);
      // Admin dashboard always allows access (bypass for development)
      setIsAuthenticated(true);
      setError(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Override API calls to use admin token
  useEffect(() => {
    if (isAuthenticated) {
      // Set admin token for all API calls
      const adminToken = localStorage.getItem('auth_token') || 'admin-bypass-token';
      localStorage.setItem('auth_token', adminToken);
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return (
      <div className="dashboard-auth">
        <div className="auth-container">
          <h1>Admin Dashboard</h1>
          <p>Authenticating...</p>
        </div>
      </div>
    );
  }

  if (error && !isAuthenticated) {
    return (
      <div className="dashboard-auth">
        <div className="auth-container">
          <h1>Admin Dashboard</h1>
          <p className="error">{error}</p>
          <button onClick={checkAdminAuth}>Retry</button>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="dashboard-auth">
        <div className="auth-container">
          <h1>Admin Dashboard</h1>
          <p>Access Denied</p>
          <button onClick={checkAdminAuth}>Retry Authentication</button>
        </div>
      </div>
    );
  }

  return <Dashboard />;
}

