import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Pencil } from 'lucide-react';
import './Profile.css';

export default function Profile() {
  const navigate = useNavigate();
  
  const [language, setLanguage] = useState<'Русский' | 'Английский'>('Русский');
  const [maxShifts, setMaxShifts] = useState(19);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [shiftRemindersEnabled, setShiftRemindersEnabled] = useState(true);
  const [shiftReminderTimes, setShiftReminderTimes] = useState<number[]>([48, 24, 6]);
  const [availabilityRemindersEnabled, setAvailabilityRemindersEnabled] = useState(true);
  const [availabilityReminderTimes, setAvailabilityReminderTimes] = useState<number[]>([72, 24]);

  const handleEditClick = () => {
    navigate('/profile/edit');
  };

  const handleLogout = () => {
    // TODO: Handle logout logic
    console.log('Logging out...');
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'Русский' ? 'Английский' : 'Русский');
  };

  const incrementShifts = () => {
    setMaxShifts(prev => prev + 1);
  };

  const decrementShifts = () => {
    setMaxShifts(prev => Math.max(0, prev - 1));
  };

  const toggleShiftReminder = (hours: number) => {
    setShiftReminderTimes(prev => 
      prev.includes(hours) 
        ? prev.filter(h => h !== hours)
        : [...prev, hours]
    );
  };

  const toggleAvailabilityReminder = (hours: number) => {
    setAvailabilityReminderTimes(prev => 
      prev.includes(hours) 
        ? prev.filter(h => h !== hours)
        : [...prev, hours]
    );
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=400&fit=crop" 
            alt="Profile"
          />
        </div>
        <div className="profile-info">
          <h1>Иван Иванов</h1>
          <p>Официант</p>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={20} />
        </button>
      </div>

      <button className="edit-btn" onClick={handleEditClick}>
        Редактировать
        <Pencil size={16} />
      </button>

      <div className="profile-section">
        <div className="profile-field">
          <span className="field-label">Код команды</span>
          <div className="field-value not-specified">Не указан</div>
        </div>

        <div className="profile-field">
          <span className="field-label">Цвет</span>
          <div className="color-picker">
            <div className="color-indicator" />
          </div>
        </div>

        <div className="profile-field">
          <span className="field-label">Язык</span>
          <div className="field-value" onClick={toggleLanguage}>{language} ›</div>
        </div>

        <div className="profile-field">
          <span className="field-label">Макс. смен в месяц</span>
          <div className="stepper">
            <button className="stepper-btn" onClick={decrementShifts}>−</button>
            <span className="stepper-value">{maxShifts}</span>
            <button className="stepper-btn" onClick={incrementShifts}>+</button>
          </div>
        </div>
      </div>

      <div className="profile-section">
        <div className="profile-field">
          <span className="field-label">Уведомления</span>
          <div 
            className={`toggle-switch ${notificationsEnabled ? 'active' : ''}`}
            onClick={() => setNotificationsEnabled(!notificationsEnabled)}
          >
            <div className="toggle-knob" />
          </div>
        </div>

        <div className="profile-field time-field">
          <span className="field-label secondary">Время</span>
          <div className="time-range">
            <span className="time-label">с</span>
            <div className="time-picker">9:00</div>
            <span className="time-label">до</span>
            <div className="time-picker">22:00</div>
          </div>
        </div>

        <div className="notifications-group">
          <div className="profile-field">
            <span className="field-label secondary">Напоминания о смене</span>
            <div 
              className={`toggle-switch ${shiftRemindersEnabled ? 'active' : ''}`}
              onClick={() => setShiftRemindersEnabled(!shiftRemindersEnabled)}
            >
              <div className="toggle-knob" />
            </div>
          </div>

          <div className="notification-buttons">
            <button 
              className={`notification-btn ${shiftReminderTimes.includes(72) ? 'active' : ''}`}
              onClick={() => toggleShiftReminder(72)}
            >
              За 72 часа
            </button>
            <button 
              className={`notification-btn ${shiftReminderTimes.includes(48) ? 'active' : ''}`}
              onClick={() => toggleShiftReminder(48)}
            >
              За 48 часов
            </button>
            <button 
              className={`notification-btn ${shiftReminderTimes.includes(24) ? 'active' : ''}`}
              onClick={() => toggleShiftReminder(24)}
            >
              За 24 часа
            </button>
            <button 
              className={`notification-btn ${shiftReminderTimes.includes(12) ? 'active' : ''}`}
              onClick={() => toggleShiftReminder(12)}
            >
              За 12 часов
            </button>
            <button 
              className={`notification-btn ${shiftReminderTimes.includes(6) ? 'active' : ''}`}
              onClick={() => toggleShiftReminder(6)}
            >
              За 6 часов
            </button>
            <button 
              className={`notification-btn ${shiftReminderTimes.includes(1) ? 'active' : ''}`}
              onClick={() => toggleShiftReminder(1)}
            >
              За 1 час
            </button>
          </div>
        </div>

        <div className="notifications-group">
          <div className="profile-field-column">
            <div className="profile-field">
              <span className="field-label secondary">Напоминания о занятости</span>
              <div 
                className={`toggle-switch ${availabilityRemindersEnabled ? 'active' : ''}`}
                onClick={() => setAvailabilityRemindersEnabled(!availabilityRemindersEnabled)}
              >
                <div className="toggle-knob" />
              </div>
            </div>
            <p className="field-note">(до начала составления графика)</p>
          </div>

          <div className="notification-buttons">
            <button 
              className={`notification-btn ${availabilityReminderTimes.includes(72) ? 'active' : ''}`}
              onClick={() => toggleAvailabilityReminder(72)}
            >
              За 72 часа
            </button>
            <button 
              className={`notification-btn ${availabilityReminderTimes.includes(48) ? 'active' : ''}`}
              onClick={() => toggleAvailabilityReminder(48)}
            >
              За 48 часов
            </button>
            <button 
              className={`notification-btn ${availabilityReminderTimes.includes(24) ? 'active' : ''}`}
              onClick={() => toggleAvailabilityReminder(24)}
            >
              За 24 часа
            </button>
            <button 
              className={`notification-btn ${availabilityReminderTimes.includes(12) ? 'active' : ''}`}
              onClick={() => toggleAvailabilityReminder(12)}
            >
              За 12 часов
            </button>
            <button 
              className={`notification-btn ${availabilityReminderTimes.includes(6) ? 'active' : ''}`}
              onClick={() => toggleAvailabilityReminder(6)}
            >
              За 6 часов
            </button>
            <button 
              className={`notification-btn ${availabilityReminderTimes.includes(1) ? 'active' : ''}`}
              onClick={() => toggleAvailabilityReminder(1)}
            >
              За 1 час
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}