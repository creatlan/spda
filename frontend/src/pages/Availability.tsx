import { useState, useEffect } from 'react';
import ConfirmModal from '../components/ConfirmModal';
import { apiDelete, apiGet, apiPost, apiPut } from '../utils/api';
import './Availability.css';

type AvailabilityStatus = null | 'free' | 'inconvenient' | 'unavailable' | 'shift-day' | 'shift-evening';

interface AvailabilityData {
  [key: string]: {
    morning: AvailabilityStatus;
    evening: AvailabilityStatus;
  };
}

export default function Availability() {
  const today = new Date();
  const [selectedDateOffset, setSelectedDateOffset] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showQuickAction, setShowQuickAction] = useState(false);
  const [quickActionPosition, setQuickActionPosition] = useState({ x: 0, y: 0 });
  const [selectedSlot, setSelectedSlot] = useState<{ date: Date; time: 'morning' | 'evening' } | null>(null);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
  const [contextMenuSlot, setContextMenuSlot] = useState<{ date: Date; time: 'morning' | 'evening' } | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Store availability data - will be fetched from backend
  // TODO: Replace with API call to GET /api/availability
  const [availabilityData, setAvailabilityData] = useState<AvailabilityData>({});

  const generateInfiniteDays = () => {
    const days = [];
    for (let i = -30; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push({
        date: date,
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        offset: i,
      });
    }
    return days;
  };

  const mapAvailabilityResponse = (response: unknown): AvailabilityData => {
    const mapped: AvailabilityData = {};

    if (Array.isArray(response)) {
      response.forEach((entry: any) => {
        if (!entry?.date) return;
        const dateKey = entry.date as string;
        const timeSlot = (entry.timeSlot || entry.time || '').toLowerCase();
        if (!mapped[dateKey]) {
          mapped[dateKey] = { morning: null, evening: null };
        }
        if (timeSlot === 'morning' || timeSlot === 'afternoon') {
          mapped[dateKey].morning = entry.status as AvailabilityStatus;
        }
        if (timeSlot === 'evening') {
          mapped[dateKey].evening = entry.status as AvailabilityStatus;
        }
      });
    } else if (response && typeof response === 'object') {
      Object.entries(response as Record<string, any>).forEach(([dateKey, slots]) => {
        mapped[dateKey] = {
          morning: (slots as any).morning ?? (slots as any).afternoon ?? null,
          evening: (slots as any).evening ?? null,
        };
      });
    }

    return mapped;
  };

  const persistAvailability = async (dateKey: string, time: 'morning' | 'evening', status: AvailabilityStatus) => {
    await apiPut('/api/availability', {
      date: dateKey,
      timeSlot: time,
      status,
    });
  };

  const removeAvailability = async (dateKey: string, time: 'morning' | 'evening') => {
    await apiDelete(`/api/availability?date=${encodeURIComponent(dateKey)}&timeSlot=${time}`);
  };

  const loadAvailability = async () => {
    try {
      const startDate = getDateKey(today);
      const response = await apiGet<unknown>(`/api/availability?startDate=${startDate}&days=30`);
      setAvailabilityData(mapAvailabilityResponse(response));
      setError(null);
    } catch (err) {
      console.error('Failed to load availability', err);
      setError('Не удалось загрузить занятость');
    }
  };

  const allDays = generateInfiniteDays();

  useEffect(() => {
    loadAvailability();
  }, []);
  const visibleDays = allDays.slice(30 + selectedDateOffset - 3, 30 + selectedDateOffset + 4);

  const getDateKey = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const getSchedule = (date: Date) => {
    const key = getDateKey(date);
    const saved = availabilityData[key];
    
    if (saved) {
      return {
        morning: { start: '9', end: '15', status: saved.morning },
        evening: { start: '15', end: '21', status: saved.evening },
      };
    }

    // Demo data for visualization
    const dayOfWeek = (date.getDay() + 6) % 7;
    
    if (dayOfWeek === 0) {
      return {
        morning: { start: '9', end: '15', status: 'shift-day' as AvailabilityStatus },
        evening: { start: '15', end: '21', status: 'inconvenient' as AvailabilityStatus },
      };
    } else if (dayOfWeek === 1) {
      return {
        morning: { start: '9', end: '15', status: 'free' as AvailabilityStatus },
        evening: { start: '15', end: '21', status: 'shift-evening' as AvailabilityStatus },
      };
    } else if (dayOfWeek === 3) {
      return {
        morning: { start: '9', end: '15', status: 'inconvenient' as AvailabilityStatus },
        evening: { start: '15', end: '21', status: 'unavailable' as AvailabilityStatus },
      };
    } else {
      return {
        morning: { start: '9', end: '15', status: null },
        evening: { start: '15', end: '21', status: null },
      };
    }
  };

  const timeLabels = [
    '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
    '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
  ];

  const handleSlotClick = (date: Date, time: 'morning' | 'evening', event: React.MouseEvent) => {
    const schedule = getSchedule(date);
    const slot = schedule[time];
    
    if (slot.status === 'shift-day' || slot.status === 'shift-evening') {
      // Show quick action popup for shifts
      const rect = event.currentTarget.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      
      // Center horizontally and make sure it doesn't go off screen
      let x = rect.left + rect.width / 2;
      x = Math.max(100, Math.min(x, viewportWidth - 100)); // Keep within bounds
      
      setQuickActionPosition({ 
        x: x, 
        y: rect.bottom + 8 
      });
      setSelectedSlot({ date, time });
      setShowQuickAction(true);
    } else {
      // Show context menu for status selection
      const rect = event.currentTarget.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      const menuWidth = 230;
      const menuHeight = 180;
      
      // Calculate position to keep menu within viewport
      let x = rect.left + rect.width / 2;
      let y = rect.bottom + 8;
      
      // Check horizontal bounds
      if (x + menuWidth / 2 > viewportWidth - 16) {
        x = viewportWidth - menuWidth / 2 - 16;
      }
      if (x - menuWidth / 2 < 16) {
        x = menuWidth / 2 + 16;
      }
      
      // Check vertical bounds
      if (y + menuHeight > viewportHeight - 16) {
        y = rect.top - menuHeight - 8;
      }
      
      setContextMenuPosition({ x, y });
      setContextMenuSlot({ date, time });
      setShowContextMenu(true);
    }
  };

  const handleQuickActionClick = () => {
    setShowQuickAction(false);
    setIsModalOpen(true);
  };

  const handleConfirmReplacement = async () => {
    setIsModalOpen(false);
    if (!selectedSlot) return;

    try {
      await apiPost('/api/shifts/find-replacement', {
        date: getDateKey(selectedSlot.date),
        time: selectedSlot.time === 'evening' ? 'evening' : 'morning',
      });
    } catch (err) {
      console.error('Failed to request replacement', err);
      setError('Не удалось отправить запрос на замену');
    }

    setSelectedSlot(null);
  };

  const handleStatusSelect = async (status: AvailabilityStatus) => {
    if (contextMenuSlot) {
      const key = getDateKey(contextMenuSlot.date);
      const currentData = availabilityData[key] || { morning: null, evening: null };

      setAvailabilityData({
        ...availabilityData,
        [key]: {
          ...currentData,
          [contextMenuSlot.time]: status,
        }
      });

      try {
        if (status === null) {
          await removeAvailability(key, contextMenuSlot.time);
        } else {
          await persistAvailability(key, contextMenuSlot.time, status);
        }
      } catch (err) {
        console.error('Failed to update availability', err);
        setError('Не удалось обновить занятость');
        // Revert optimistic update
        setAvailabilityData(current => ({
          ...current,
          [key]: currentData,
        }));
      }
    }
    setShowContextMenu(false);
    setContextMenuSlot(null);
  };

  const getStatusLabel = (status: AvailabilityStatus) => {
    if (!status) return '';
    switch (status) {
      case 'free':
        return 'Свободен';
      case 'inconvenient':
        return 'Неудобно, но могу выйти';
      case 'unavailable':
        return 'Не могу выйти';
      case 'shift-day':
        return 'СМЕНА - День';
      case 'shift-evening':
        return 'СМЕНА - Вечер';
    }
  };

  const handleDayClick = (offset: number) => {
    setSelectedDateOffset(offset);
  };

  const handleScrollLeft = () => {
    if (selectedDateOffset > -30) {
      setSelectedDateOffset(selectedDateOffset - 1);
    }
  };

  const handleScrollRight = () => {
    if (selectedDateOffset < 30) {
      setSelectedDateOffset(selectedDateOffset + 1);
    }
  };

  const displayDays = [
    allDays[30 + selectedDateOffset - 1],
    allDays[30 + selectedDateOffset],
    allDays[30 + selectedDateOffset + 1],
  ];

  const getCurrentStatus = () => {
    if (!contextMenuSlot) return null;
    const schedule = getSchedule(contextMenuSlot.date);
    return schedule[contextMenuSlot.time].status;
  };

  const handleBackToHome = () => {
    // Navigate back to home - handled by App.tsx state
    window.dispatchEvent(new CustomEvent('navigate-home'));
  };

  return (
    <div className="availability-page">
      <div className="availability-header">
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
      </div>

      {error && <div className="error-banner">{error}</div>}

      {/* Days selector with infinite scroll */}
      <div className="days-selector-container">
        <button 
          className="scroll-button left" 
          onClick={handleScrollLeft}
          disabled={selectedDateOffset <= -30}
        >
          <svg fill="none" viewBox="0 0 24 24">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="days-selector">
          {visibleDays.map((dayInfo, index) => {
            const isSelected = dayInfo.offset === selectedDateOffset;
            const weekdayIndex = (dayInfo.date.getDay() + 6) % 7;
            const weekdays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
            return (
              <div 
                key={index} 
                className={`day-item ${isSelected ? 'selected' : ''}`}
                onClick={() => handleDayClick(dayInfo.offset)}
              >
                <div className="day-weekday">{weekdays[weekdayIndex]}</div>
                <div className="day-number">{dayInfo.day}</div>
                {isSelected && <div className="day-dot" />}
              </div>
            );
          })}
        </div>
        <button 
          className="scroll-button right" 
          onClick={handleScrollRight}
          disabled={selectedDateOffset >= 30}
        >
          <svg fill="none" viewBox="0 0 24 24">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Schedule grid */}
      <div className="schedule-container">
        <div className="time-labels">
          {timeLabels.map((time, index) => (
            <div key={index} className="time-label">
              {time}
            </div>
          ))}
        </div>

        <div className="schedule-grid">
          <div className="column-headers">
            {displayDays.map((dayInfo, index) => {
              const weekdayIndex = (dayInfo.date.getDay() + 6) % 7;
              const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
              return (
                <div key={index} className="column-header">
                  {weekdays[weekdayIndex]} - {String(dayInfo.day).padStart(2, '0')}
                </div>
              );
            })}
          </div>

          <div className="time-slots">
            {displayDays.map((dayInfo, dayIndex) => {
              const schedule = getSchedule(dayInfo.date);
              return (
                <div key={dayIndex} className="day-column">
                  <div
                    className={`time-slot ${schedule.morning.status || 'empty'} ${schedule.morning.status === 'shift-day' ? 'selected' : ''}`}
                    onClick={(e) => handleSlotClick(dayInfo.date, 'morning', e)}
                  >
                    {schedule.morning.status && (
                      <>
                        <p className="slot-label">{getStatusLabel(schedule.morning.status)}</p>
                        <p className="slot-time">{schedule.morning.start}-{schedule.morning.end}</p>
                      </>
                    )}
                  </div>

                  <div
                    className={`time-slot ${schedule.evening.status || 'empty'} ${schedule.evening.status === 'shift-evening' ? 'selected' : ''}`}
                    onClick={(e) => handleSlotClick(dayInfo.date, 'evening', e)}
                  >
                    {schedule.evening.status && (
                      <>
                        <p className="slot-label">{getStatusLabel(schedule.evening.status)}</p>
                        <p className="slot-time">{schedule.evening.start}-{schedule.evening.end}</p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick action popup */}
      {showQuickAction && (
        <div className="quick-action-overlay" onClick={() => setShowQuickAction(false)}>
          <div 
            className="quick-action-popup"
            style={{
              left: `${quickActionPosition.x}px`,
              top: `${quickActionPosition.y}px`,
              transform: 'translateX(-50%)'
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleQuickActionClick();
            }}
          >
            Найти замену
          </div>
        </div>
      )}

      {/* Context menu - Positioned smartly */}
      {showContextMenu && (
        <div className="context-menu-overlay-inline" onClick={() => setShowContextMenu(false)}>
          <div 
            className="context-menu-wrapper"
            style={{
              left: `${contextMenuPosition.x}px`,
              top: `${contextMenuPosition.y}px`,
              transform: 'translateX(-50%)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="context-menu">
              <div className="context-menu-blur-container">
                <div className="context-menu-blur-mask" />
                <div className="context-menu-fill" />
              </div>
              <div className="context-menu-content">
                <div className="context-menu-section">
                  <p className="context-menu-title">Занятость</p>
                </div>
                <button 
                  className={`context-menu-item ${getCurrentStatus() === 'free' ? 'selected' : ''}`}
                  onClick={() => handleStatusSelect('free')}
                >
                  {getCurrentStatus() === 'free' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4L6 11.5L2.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {getCurrentStatus() !== 'free' && <div className="checkbox-placeholder"></div>}
                  <span>Свободен</span>
                </button>
                <button 
                  className={`context-menu-item ${getCurrentStatus() === 'inconvenient' ? 'selected' : ''}`}
                  onClick={() => handleStatusSelect('inconvenient')}
                >
                  {getCurrentStatus() === 'inconvenient' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4L6 11.5L2.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {getCurrentStatus() !== 'inconvenient' && <div className="checkbox-placeholder"></div>}
                  <span>Не удобно, но могу выйти</span>
                </button>
                <button 
                  className={`context-menu-item ${getCurrentStatus() === 'unavailable' ? 'selected' : ''}`}
                  onClick={() => handleStatusSelect('unavailable')}
                >
                  {getCurrentStatus() === 'unavailable' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4L6 11.5L2.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {getCurrentStatus() !== 'unavailable' && <div className="checkbox-placeholder"></div>}
                  <span>Не могу выйти</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmReplacement}
        title="Найти замену"
        message="Вы действительно не сможете и хотите найти замену?"
      />
    </div>
  );
}