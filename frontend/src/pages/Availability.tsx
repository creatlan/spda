import { useState, useRef } from 'react';
import ConfirmModal from '../components/ConfirmModal';
import './Availability.css';

type AvailabilityStatus = 'free' | 'inconvenient' | 'unavailable' | 'shift-day' | 'shift-evening';

export default function Availability() {
  const today = new Date();
  const [selectedDateOffset, setSelectedDateOffset] = useState(0); // Offset from today
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<{ date: Date; time: 'morning' | 'evening' } | null>(null);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
  const scrollRef = useRef<HTMLDivElement>(null);

  const monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  const weekdaysShort = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  // Generate infinite scroll days (30 days back and forward)
  const generateInfiniteDays = () => {
    const days = [];
    for (let i = -30; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const weekdayIndex = (date.getDay() + 6) % 7;
      days.push({
        date: date,
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        weekday: weekdaysShort[weekdayIndex],
        offset: i,
      });
    }
    return days;
  };

  const allDays = generateInfiniteDays();
  const visibleDays = allDays.slice(30 + selectedDateOffset - 3, 30 + selectedDateOffset + 4); // 7 days visible

  // Get schedule based on date
  const getSchedule = (date: Date) => {
    const dayOfWeek = (date.getDay() + 6) % 7;
    
    if (dayOfWeek === 0) { // Monday
      return {
        morning: { start: '9', end: '15', status: 'shift-day' as AvailabilityStatus },
        evening: { start: '15', end: '21', status: 'inconvenient' as AvailabilityStatus },
      };
    } else if (dayOfWeek === 1) { // Tuesday
      return {
        morning: { start: '9', end: '15', status: 'free' as AvailabilityStatus },
        evening: { start: '15', end: '21', status: 'shift-evening' as AvailabilityStatus },
      };
    } else if (dayOfWeek === 3) { // Thursday
      return {
        morning: { start: '9', end: '15', status: 'inconvenient' as AvailabilityStatus },
        evening: { start: '15', end: '21', status: 'unavailable' as AvailabilityStatus },
      };
    } else {
      return {
        morning: { start: '9', end: '15', status: 'free' as AvailabilityStatus },
        evening: { start: '15', end: '21', status: 'free' as AvailabilityStatus },
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
      setSelectedSlot({ date, time });
      setIsModalOpen(true);
    } else {
      // Show context menu
      setContextMenuPosition({ x: event.clientX, y: event.clientY });
      setShowContextMenu(true);
    }
  };

  const handleConfirmReplacement = () => {
    setIsModalOpen(false);
    console.log('Finding replacement for:', selectedSlot);
    setSelectedSlot(null);
  };

  const getStatusLabel = (status: AvailabilityStatus) => {
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

  // Get the 3 days to display (yesterday, today, tomorrow relative to selected)
  const displayDays = [
    allDays[30 + selectedDateOffset - 1],
    allDays[30 + selectedDateOffset],
    allDays[30 + selectedDateOffset + 1],
  ];

  return (
    <div className="availability-page">
      <div className="availability-header">
        <button className="back-button">
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
        <h1>{monthNames[displayDays[1].month]}</h1>
      </div>

      {/* Week days header */}
      <div className="week-header">
        {weekdaysShort.map((day, index) => (
          <div key={index} className={`week-day ${index >= 5 ? 'weekend' : ''}`}>
            {day}
          </div>
        ))}
      </div>

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
        <div className="days-selector" ref={scrollRef}>
          {visibleDays.map((dayInfo, index) => {
            const isSelected = dayInfo.offset === selectedDateOffset;
            return (
              <div 
                key={index} 
                className={`day-item ${isSelected ? 'selected' : ''}`}
                onClick={() => handleDayClick(dayInfo.offset)}
              >
                <div className="day-weekday">{dayInfo.weekday}</div>
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
            {displayDays.map((dayInfo, index) => (
              <div key={index} className="column-header">
                {dayInfo.weekday} - {String(dayInfo.day).padStart(2, '0')}
              </div>
            ))}
          </div>

          <div className="time-slots">
            {displayDays.map((dayInfo, dayIndex) => {
              const schedule = getSchedule(dayInfo.date);
              return (
                <div key={dayIndex} className="day-column">
                  <div
                    className={`time-slot ${schedule.morning.status}`}
                    onClick={(e) => handleSlotClick(dayInfo.date, 'morning', e)}
                  >
                    <p className="slot-label">{getStatusLabel(schedule.morning.status)}</p>
                    <p className="slot-time">{schedule.morning.start}-{schedule.morning.end}</p>
                  </div>

                  <div
                    className={`time-slot ${schedule.evening.status}`}
                    onClick={(e) => handleSlotClick(dayInfo.date, 'evening', e)}
                  >
                    <p className="slot-label">{getStatusLabel(schedule.evening.status)}</p>
                    <p className="slot-time">{schedule.evening.start}-{schedule.evening.end}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Context menu */}
      {showContextMenu && (
        <div className="context-menu-overlay" onClick={() => setShowContextMenu(false)}>
          <div className="context-menu-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="context-menu">
              <div className="context-menu-blur-container">
                <div className="context-menu-blur-mask" />
                <div className="context-menu-fill" />
              </div>
              <div className="context-menu-content">
                <div className="context-menu-section">
                  <p className="context-menu-title">Занятость</p>
                </div>
                <button className="context-menu-item" onClick={() => setShowContextMenu(false)}>
                  <span>Свободен</span>
                </button>
                <button className="context-menu-item selected" onClick={() => setShowContextMenu(false)}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4L6 11.5L2.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Не удобно, но могу выйти</span>
                </button>
                <button className="context-menu-item" onClick={() => setShowContextMenu(false)}>
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
