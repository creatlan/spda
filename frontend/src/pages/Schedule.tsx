import { useState } from 'react';
import './Schedule.css';

interface Position {
  id: string;
  name: string;
  enabled: boolean;
}

export default function Schedule() {
  const today = new Date();
  const [selectedDateOffset, setSelectedDateOffset] = useState(0);
  const [positions, setPositions] = useState<Position[]>([
    { id: 'waiters', name: 'Официанты', enabled: true },
    { id: 'runners', name: 'Раннеры', enabled: true },
    { id: 'kitchen', name: 'Кухня', enabled: true },
  ]);
  
  const [showFilters, setShowFilters] = useState(false);

  const weekdaysShort = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  // Generate week days with infinite scroll
  const generateWeekDays = () => {
    const days = [];
    for (let i = -30; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const weekdayIndex = (date.getDay() + 6) % 7;
      days.push({
        date: date,
        day: date.getDate(),
        weekday: weekdaysShort[weekdayIndex],
        offset: i,
      });
    }
    return days;
  };

  const allDays = generateWeekDays();
  const selectedDay = allDays[30 + selectedDateOffset];

  // Time range with 1-hour intervals (9:00 - 21:00)
  const timeLabels = [];
  for (let hour = 9; hour <= 21; hour++) {
    timeLabels.push({ hour, label: `${hour}:00` });
  }

  const staff = [
    'Павел Павлов',
    'Павел Павлов',
    'Павел Павлов',
    'Павел Павлов',
  ];

  const kitchenStaff = [
    'Павел Павлов',
    'Павел Павлов',
    'Павел Павлов',
    'Павел Павлов',
    'Павел Павлов',
    'Павел Павлов',
    'Павел Павлов',
    'Павел Павлов',
    'Павел Павлов',
  ];

  const waiterStaffEvening = [
    'Павел Павлов',
    'Павел Павлов',
    'Иван Иванов',
    'Павел Павлов',
  ];

  const togglePosition = (id: string) => {
    setPositions(positions.map(pos => 
      pos.id === id ? { ...pos, enabled: !pos.enabled } : pos
    ));
  };

  const handleDayClick = (offset: number) => {
    setSelectedDateOffset(offset);
  };

  // Get visible week days
  const visibleDays = allDays.slice(30 + selectedDateOffset - 3, 30 + selectedDateOffset + 4);

  const handleBackToHome = () => {
    // Navigate back to home - handled by App.tsx state
    window.dispatchEvent(new CustomEvent('navigate-home'));
  };

  return (
    <div className="schedule-page">
      <div className="schedule-header">
        <button className="back-button" onClick={handleBackToHome}>
          <svg fill="none" viewBox="0 0 24 24">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        </button>
        <h1>Ноябрь</h1>
        <div className="header-actions">
          <button className="filters-button" onClick={() => setShowFilters(!showFilters)}>
            Позиция
          </button>
          <button className="export-button">
            Экспорт
          </button>
        </div>
      </div>

      {/* Filters Modal - Liquid Glass */}
      {showFilters && (
        <div className="filters-overlay-liquid" onClick={() => setShowFilters(false)}>
          <div className="filters-modal-liquid" onClick={(e) => e.stopPropagation()}>
            <div className="filters-blur-container">
              <div className="filters-blur-mask" />
              <div className="filters-fill" />
            </div>
            <div className="filters-content">
              <div className="filters-section">
                <p className="filters-title">Позиция</p>
              </div>
              {positions.map(pos => (
                <label key={pos.id} className="filter-item">
                  {pos.enabled && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4L6 11.5L2.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {!pos.enabled && <div className="checkbox-placeholder"></div>}
                  <input
                    type="checkbox"
                    checked={pos.enabled}
                    onChange={() => togglePosition(pos.id)}
                    style={{ display: 'none' }}
                  />
                  <span>{pos.name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Week days header */}
      <div className="week-header">
        {weekdaysShort.map((day, index) => (
          <div key={index} className={`week-day ${index >= 5 ? 'weekend' : ''}`}>
            {day}
          </div>
        ))}
      </div>

      {/* Days selector */}
      <div className="days-selector">
        {visibleDays.map((dayInfo, index) => {
          const isSelected = dayInfo.offset === selectedDateOffset;
          return (
            <div 
              key={index} 
              className={`day-item ${isSelected ? 'selected' : ''}`}
              onClick={() => handleDayClick(dayInfo.offset)}
            >
              <div className="day-number">{dayInfo.day}</div>
              {isSelected && <div className="day-dot" />}
            </div>
          );
        })}
      </div>

      {/* Schedule - Scrollable */}
      <div className="schedule-scroll-container">
        <div className="schedule-with-time">
          {/* Time column */}
          <div className="time-column">
            <div className="time-column-header"></div>
            <div className="time-labels-vertical">
              {timeLabels.map((time, index) => (
                <div key={index} className="time-cell" style={{ height: '80px' }}>
                  {time.label}
                </div>
              ))}
            </div>
          </div>

          {/* Schedule content */}
          <div className="schedule-content-wrapper">
            <div className="schedule-day-header">
              {selectedDay.weekday} - {String(selectedDay.day).padStart(2, '0')}
            </div>

            <div className="schedule-timeline">
              {/* Background time grid */}
              <div className="time-grid">
                {timeLabels.map((_, index) => (
                  <div key={index} className="time-grid-row" style={{ height: '80px' }}></div>
                ))}
              </div>

              {/* Morning shift: 9:00-15:00 (rows 0-6) */}
              <div className="shift-block-absolute morning-shift selected">
                <div className="shift-separator">День</div>
                <div className="shift-header">
                  <h3>СМЕНА - День</h3>
                  <p className="shift-time">9-15</p>
                </div>

                <div className="shift-content">
                  {positions.find(p => p.id === 'waiters')?.enabled && (
                    <div className="position-group">
                      <h4>Официанты</h4>
                      <div className="staff-grid">
                        {staff.map((name, index) => (
                          <p key={index} className="staff-name">{name}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {positions.find(p => p.id === 'kitchen')?.enabled && (
                    <div className="position-group">
                      <h4>Кухня</h4>
                      <div className="staff-grid">
                        {kitchenStaff.map((name, index) => (
                          <p key={index} className="staff-name">{name}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {positions.find(p => p.id === 'runners')?.enabled && (
                    <div className="position-group">
                      <h4>Раннеры</h4>
                      <div className="staff-grid">
                        {staff.map((name, index) => (
                          <p key={index} className="staff-name">{name}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Evening shift: 15:00-21:00 (rows 6-12) */}
              <div className="shift-block-absolute evening-shift">
                <div className="shift-header">
                  <h3>СМЕНА - Вечер</h3>
                  <p className="shift-time">15-21</p>
                </div>

                <div className="shift-content">
                  {positions.find(p => p.id === 'waiters')?.enabled && (
                    <div className="position-group">
                      <h4>Официанты</h4>
                      <div className="staff-grid">
                        {waiterStaffEvening.map((name, index) => (
                          <p key={index} className={`staff-name ${name === 'Иван Иванов' ? 'highlighted' : ''}`}>
                            {name}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {positions.find(p => p.id === 'kitchen')?.enabled && (
                    <div className="position-group">
                      <h4>Кухня</h4>
                      <div className="staff-grid">
                        {kitchenStaff.map((name, index) => (
                          <p key={index} className="staff-name">{name}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {positions.find(p => p.id === 'runners')?.enabled && (
                    <div className="position-group">
                      <h4>Раннеры</h4>
                      <div className="staff-grid">
                        {staff.map((name, index) => (
                          <p key={index} className="staff-name">{name}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}