import { useEffect, useState } from 'react';
import { apiGet } from '../utils/api';
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
  const [error, setError] = useState<string | null>(null);

  const weekdaysShort = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  const weekdaysFull = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

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
        weekday: weekdaysFull[weekdayIndex],
        weekdayShort: weekdaysShort[weekdayIndex],
        offset: i,
        isWeekend: weekdayIndex >= 5,
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

  const formatDateParam = (date: Date) => date.toISOString().split('T')[0];

  const loadSchedule = async (dateParam: string) => {
    try {
      const data = await apiGet<any>(`/api/schedule/day?date=${dateParam}`);
      const shifts = (data as any).shifts || {};
      const dayPositions = shifts.day?.positions || shifts.morning?.positions || {};
      const eveningPositions = shifts.night?.positions || shifts.evening?.positions || {};

      setDayAssignments({
        waiters: dayPositions.waiters || [],
        runners: dayPositions.runners || [],
        kitchen: dayPositions.kitchen || [],
      });

      setEveningAssignments({
        waiters: eveningPositions.waiters || [],
        runners: eveningPositions.runners || [],
        kitchen: eveningPositions.kitchen || [],
      });
      setError(null);
    } catch (err) {
      console.error('Failed to load schedule', err);
      setError('Не удалось загрузить расписание');
      setDayAssignments(defaultDayAssignments);
      setEveningAssignments(defaultEveningAssignments);
    }
  };

  useEffect(() => {
    const date = new Date(today);
    date.setDate(today.getDate() + selectedDateOffset);
    loadSchedule(formatDateParam(date));
  }, [selectedDateOffset]);

  const defaultDayAssignments = {
    waiters: ['Павел Павлов', 'Павел Павлов', 'Павел Павлов', 'Павел Павлов'],
    kitchen: ['Павел Павлов', 'Павел Павлов', 'Павел Павлов', 'Павел Павлов', 'Павел Павлов', 'Павел Павлов', 'Павел Павлов', 'Павел Павлов', 'Павел Павлов'],
    runners: ['Павел Павлов', 'Павел Павлов', 'Павел Павлов', 'Павел Павлов'],
  };

  const defaultEveningAssignments = {
    waiters: ['Павел Павлов', 'Павел Павлов', 'Иван Иванов', 'Павел Павлов'],
    kitchen: ['Павел Павлов', 'Павел Павлов', 'Павел Павлов', 'Павел Павлов', 'Павел Павлов', 'Павел Павлов', 'Павел Павлов', 'Павел Павлов', 'Павел Павлов'],
    runners: ['Павел Павлов', 'Павел Павлов', 'Павел Павлов', 'Павел Павлов'],
  };

  const [dayAssignments, setDayAssignments] = useState(defaultDayAssignments);
  const [eveningAssignments, setEveningAssignments] = useState(defaultEveningAssignments);

  const togglePosition = (id: string) => {
    setPositions(positions.map(pos => 
      pos.id === id ? { ...pos, enabled: !pos.enabled } : pos
    ));
  };

  const handleDayClick = (offset: number) => {
    setSelectedDateOffset(offset);
  };

  // Get visible week days (7 days centered on selected)
  const visibleDays = allDays.slice(30 + selectedDateOffset - 3, 30 + selectedDateOffset + 4);

  const handleBackToHome = () => {
    window.dispatchEvent(new CustomEvent('navigate-home'));
  };

  return (
    <div className="schedule-page">
      {/* Header */}
      <div className="schedule-header">
        <button className="back-button" onClick={handleBackToHome}>
          <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
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
            Фильтры
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="export-button">
            Экспорт
          </button>
        </div>
      </div>

      {error && <div className="error-banner">{error}</div>}

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
                <button key={pos.id} className="filter-item" onClick={() => togglePosition(pos.id)}>
                  {pos.enabled && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4L6 11.5L2.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {!pos.enabled && <div className="checkbox-placeholder"></div>}
                  <span>{pos.name}</span>
                </button>
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
              <div className="day-dot" />
            </div>
          );
        })}
      </div>

      {/* Selected day display */}
      <div className="selected-day-display">
        {selectedDay.weekday} - {String(selectedDay.day).padStart(2, '0')}
      </div>

      {/* Schedule content */}
      <div className="schedule-container">
        {/* Time labels column */}
        <div className="time-labels">
          {timeLabels.map((time, index) => (
            <div key={index} className="time-label">
              {time.label}
            </div>
          ))}
        </div>

        {/* Shifts column */}
        <div className="shifts-column">
          {/* Day Shift: 9-15 */}
          <div className="shift-block day-shift">
            <div className="shift-title-container">
              <h3 className="shift-title">СМЕНА - День</h3>
              <p className="shift-time">9-15</p>
            </div>

            <div className="shift-positions">
              {positions.find(p => p.id === 'waiters')?.enabled && (
                <div className="position-section">
                  <h4 className="position-title">Официанты</h4>
                  {dayAssignments.waiters.map((name, idx) => (
                    <p key={idx} className="staff-name">{name}</p>
                  ))}
                </div>
              )}

              {positions.find(p => p.id === 'kitchen')?.enabled && (
                <div className="position-section">
                  <h4 className="position-title">Кухня</h4>
                  {dayAssignments.kitchen.map((name, idx) => (
                    <p key={idx} className="staff-name">{name}</p>
                  ))}
                </div>
              )}

              {positions.find(p => p.id === 'runners')?.enabled && (
                <div className="position-section">
                  <h4 className="position-title">Раннеры</h4>
                  {dayAssignments.runners.map((name, idx) => (
                    <p key={idx} className="staff-name">{name}</p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Evening Shift: 15-21 */}
          <div className="shift-block evening-shift">
            <div className="shift-title-container">
              <h3 className="shift-title">СМЕНА - Вечер</h3>
              <p className="shift-time">15-21</p>
            </div>

            <div className="shift-positions">
              {positions.find(p => p.id === 'waiters')?.enabled && (
                <div className="position-section">
                  <h4 className="position-title">Официанты</h4>
                  {eveningAssignments.waiters.map((name, idx) => (
                    <p key={idx} className={`staff-name ${name === 'Иван Иванов' ? 'underlined' : ''}`}>
                      {name}
                    </p>
                  ))}
                </div>
              )}

              {positions.find(p => p.id === 'kitchen')?.enabled && (
                <div className="position-section">
                  <h4 className="position-title">Кухня</h4>
                  {eveningAssignments.kitchen.map((name, idx) => (
                    <p key={idx} className="staff-name">{name}</p>
                  ))}
                </div>
              )}

              {positions.find(p => p.id === 'runners')?.enabled && (
                <div className="position-section">
                  <h4 className="position-title">Раннеры</h4>
                  {eveningAssignments.runners.map((name, idx) => (
                    <p key={idx} className="staff-name">{name}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
