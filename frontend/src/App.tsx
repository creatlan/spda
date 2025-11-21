import { useState } from 'react';
import Home from './pages/Home';
import Availability from './pages/Availability';
import Schedule from './pages/Schedule';
import Profile from './pages/Profile';
import BottomNav from './components/BottomNav';
import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'availability' | 'schedule' | 'profile'>('home');

  return (
    <div className="app">
      <div className="app-content">
        {activePage === 'home' && <Home />}
        {activePage === 'availability' && <Availability />}
        {activePage === 'schedule' && <Schedule />}
        {activePage === 'profile' && <Profile />}
      </div>
      <BottomNav activePage={activePage} onPageChange={setActivePage} />
    </div>
  );
}
