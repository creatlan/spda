import { useState, useEffect } from 'react';
import svgPaths from '../imports/svg-e6acfk1vpd';
import ConfirmModal from '../components/ConfirmModal';
import './Home.css';

interface ShiftData {
  [key: string]: 'day' | 'night' | null;
}

export default function Home() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Store shift data - will be fetched from backend
  // TODO: Replace with API call to GET /api/shifts?month=X&year=Y
  const [shiftsData, setShiftsData] = useState<ShiftData>({});

  useEffect(() => {
    // Demo data: Load shifts for current month INCLUDING PAST SHIFTS
    // TODO: API call to fetch shifts
    // fetch(`/api/shifts?month=${currentMonth}&year=${currentYear}`)
    //   .then(res => res.json())
    //   .then(data => setShiftsData(data))
    
    const demoShifts: ShiftData = {};
    
    // PAST SHIFTS (hardcoded to show history)
    demoShifts[`${currentYear}-${currentMonth}-15`] = 'day';     // 15 ноября
    demoShifts[`${currentYear}-${currentMonth}-16`] = 'night';   // 16 ноября
    demoShifts[`${currentYear}-${currentMonth}-17`] = 'day';     // 17 ноября
    demoShifts[`${currentYear}-${currentMonth}-18`] = 'night';   // 18 ноября
    demoShifts[`${currentYear}-${currentMonth}-19`] = 'day';     // 19 ноября
    demoShifts[`${currentYear}-${currentMonth}-20`] = 'night';   // 20 ноября
    
    // FUTURE SHIFTS
    const currentDay = today.getDate();
    demoShifts[`${currentYear}-${currentMonth}-${currentDay + 1}`] = 'day';
    demoShifts[`${currentYear}-${currentMonth}-${currentDay + 2}`] = 'night';
    demoShifts[`${currentYear}-${currentMonth}-${currentDay + 4}`] = 'day';
    demoShifts[`${currentYear}-${currentMonth}-${currentDay + 5}`] = 'night';
    demoShifts[`${currentYear}-${currentMonth}-${currentDay + 7}`] = 'day';
    
    setShiftsData(demoShifts);
  }, [currentMonth, currentYear]);

  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];

  const getDateKey = (year: number, month: number, day: number) => {
    return `${year}-${month}-${day}`;
  };

  const getShiftForDay = (day: number) => {
    const key = getDateKey(currentYear, currentMonth, day);
    return shiftsData[key] || null;
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleFindReplacementClick = () => {
    // Directly open modal from Home page
    setIsModalOpen(true);
  };

  const handleConfirmReplacement = () => {
    setIsModalOpen(false);
    // TODO: API call to POST /api/shifts/find-replacement
    console.log('Finding replacement...');
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
  const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  const prevMonthDays = getDaysInMonth(prevMonth, prevYear);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => prevMonthDays - firstDay + i + 1);
  
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
  const nextMonthDays = totalCells - (firstDay + daysInMonth);
  const nextDaysArray = Array.from({ length: nextMonthDays }, (_, i) => i + 1);

  const nextShiftDate = new Date(today);
  nextShiftDate.setDate(today.getDate() + 1);
  const formattedDate = nextShiftDate.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const isToday = (day: number) => {
    return day === today.getDate() && 
           currentMonth === today.getMonth() && 
           currentYear === today.getFullYear();
  };

  return (
    <div className="home-page">
      <div className="header">
        <h1>WorkPlan</h1>
      </div>

      <div className="content">
        <div className="shift-card">
          <div className="shift-info">
            <h2>Следующая смена</h2>
            <p className="shift-datetime">
              {formattedDate} <span className="shift-time">15:00-21:00</span>
            </p>
          </div>
          <button className="find-replacement-btn" onClick={handleFindReplacementClick}>
            Найти замену
          </button>
        </div>

        <div className="month-section">
          <h2>В этом месяце</h2>
          <div className="month-cards">
            <div className="stats-card">
              <p className="stats-title">9 смен</p>
              <div className="stats-details">
                <div className="stat-item">
                  <svg className="icon-sun" fill="none" viewBox="0 0 22 22">
                    <path
                      d={svgPaths.p23f74c00}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span>5</span>
                </div>
                <div className="stat-item">
                  <svg className="icon-moon" fill="none" viewBox="0 0 20 20">
                    <path
                      d={svgPaths.pccb100}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span>4</span>
                </div>
              </div>
            </div>

            <div className="earnings-card">
              <p className="earnings-amount">+ 973 ₽</p>
              <p className="earnings-today">
                Сегодня <span className="earnings-today-amount">+173 ₽</span>
              </p>
            </div>
          </div>
        </div>

        <div className="calendar">
          <div className="calendar-header">
            <button className="month-nav" onClick={handlePrevMonth}>
              <svg fill="none" viewBox="0 0 24 24">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <h3>{monthNames[currentMonth]} {currentYear}</h3>
            <button className="month-nav" onClick={handleNextMonth}>
              <svg fill="none" viewBox="0 0 24 24">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>

          <div className="calendar-grid">
            <div className="calendar-weekdays">
              <div className="weekday">пн</div>
              <div className="weekday">вт</div>
              <div className="weekday">ср</div>
              <div className="weekday">чт</div>
              <div className="weekday">пт</div>
              <div className="weekday weekend">сб</div>
              <div className="weekday weekend">вс</div>
            </div>

            <div className="calendar-days">
              {emptyDays.map((day, index) => (
                <div key={`prev-${index}`} className="calendar-day other-month">
                  <span className="day-number">{day}</span>
                  <div className="shift-placeholder" />
                </div>
              ))}
              {daysArray.map((day) => {
                const shift = getShiftForDay(day);
                return (
                  <div key={`curr-${day}`} className={`calendar-day ${isToday(day) ? 'today' : ''}`}>
                    <span className="day-number">{day}</span>
                    {shift ? (
                      <div className="shift-indicator">
                        {shift === 'day' ? (
                          <svg className="shift-icon" fill="none" viewBox="0 0 22 22">
                            <path
                              d={svgPaths.p23f74c00}
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                          </svg>
                        ) : (
                          <svg className="shift-icon moon" fill="none" viewBox="0 0 20 20">
                            <path
                              d={svgPaths.pccb100}
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                          </svg>
                        )}
                      </div>
                    ) : (
                      <div className="shift-placeholder" />
                    )}
                  </div>
                );
              })}
              {nextDaysArray.map((day, index) => (
                <div key={`next-${index}`} className="calendar-day other-month">
                  <span className="day-number">{day}</span>
                  <div className="shift-placeholder" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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