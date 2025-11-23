import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Availability from './pages/Availability';
import Schedule from './pages/Schedule';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import BottomNav from './components/BottomNav';
import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'availability' | 'schedule' | 'profile'>('home');

  useEffect(() => {
    const handleNavigateHome = () => {
      setActivePage('home');
    };

    window.addEventListener('navigate-home', handleNavigateHome);
    return () => window.removeEventListener('navigate-home', handleNavigateHome);
  }, []);

  const handlePageChange = (page: 'home' | 'availability' | 'schedule' | 'profile') => {
    // Закрываем историю при переключении страниц
    window.dispatchEvent(new CustomEvent('close-history'));
    setActivePage(page);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <div className="app-content">
          <Routes>
            <Route path="/" element={
              <>
                {activePage === 'home' && <Home />}
                {activePage === 'availability' && <Availability />}
                {activePage === 'schedule' && <Schedule />}
                {activePage === 'profile' && <Profile />}
              </>
            } />
            <Route path="/profile/edit" element={<ProfileEdit />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Routes>
          <Route path="/profile/edit" element={null} />
          <Route path="*" element={<BottomNav activePage={activePage} onPageChange={handlePageChange} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}