import { createRoot } from 'react-dom/client';
import DashboardApp from './pages/DashboardApp';
import './index.css';

// Standalone dashboard entry point
const rootElement = document.getElementById('dashboard-root');
if (rootElement) {
  createRoot(rootElement).render(<DashboardApp />);
} else {
  console.error('Dashboard root element not found');
}

