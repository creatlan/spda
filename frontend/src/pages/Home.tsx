import { useState, useEffect } from 'react';
import svgPaths from '../imports/iconPaths';
import ConfirmModal from '../components/ConfirmModal';
import HistoryModal from '../components/HistoryModal';
import NextShiftCard from '../components/NextShiftCard';
import { apiGet, apiPost } from '../utils/api';
import './Home.css';

interface ShiftData {
  [key: string]: 'day' | 'night' | null;
}

interface ShiftsResponse {
  shifts: ShiftData;
  stats?: {
    total?: number;
    day?: number;
    night?: number;
  };
  earnings?: {
    total?: number;
    today?: number;
  };
}

interface NextShiftResponse {
  id?: string;
  date: string;
  startTime: string;
  endTime: string;
  type?: 'day' | 'night';
}

export default function Home() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [shiftStatus, setShiftStatus] = useState<'normal' | 'searching' | 'found'>('normal');
  
  // Store shift data - fetched from backend
  const [shiftsData, setShiftsData] = useState<ShiftData>({});
  const [monthStats, setMonthStats] = useState({ total: 0, day: 0, night: 0 });
  const [earnings, setEarnings] = useState({ total: 0, today: 0 });
  const [nextShift, setNextShift] = useState<NextShiftResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadShifts();
  }, [currentMonth, currentYear]);

  useEffect(() => {
    loadNextShift();
  }, []);

  useEffect(() => {
    const handleCloseHistory = () => {
      setIsHistoryOpen(false);
    };

    window.addEventListener('close-history', handleCloseHistory);
    return () => window.removeEventListener('close-history', handleCloseHistory);
  }, []);

  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];

  const loadShifts = async () => {
    try {
      setError(null);
      const data = await apiGet<ShiftsResponse>(`/api/shifts?month=${currentMonth}&year=${currentYear}`);

      setShiftsData(data.shifts || {});
      setMonthStats({
        total: data.stats?.total ?? 0,
        day: data.stats?.day ?? 0,
        night: data.stats?.night ?? 0,
      });
      setEarnings({
        total: data.earnings?.total ?? 0,
        today: data.earnings?.today ?? 0,
      });
    } catch (err) {
      console.error('Failed to load shifts', err);
      setError('Не удалось загрузить данные смен');
      setShiftsData({});
      setMonthStats({ total: 0, day: 0, night: 0 });
      setEarnings({ total: 0, today: 0 });
    }
  };

  const loadNextShift = async () => {
    try {
      const data = await apiGet<NextShiftResponse>('/api/shifts/next');
      setNextShift(data);
    } catch (err) {
      console.warn('Failed to load next shift', err);
      setNextShift(null);
    }
  };

  const getDateKey = (year: number, month: number, day: number) => {
    return `${year}-${month}-${day}`;
  };

  const formatDateParam = (date: Date) => {
    return date.toISOString().split('T')[0];
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

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
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

  const handleConfirmReplacement = async () => {
    setIsModalOpen(false);
    setShiftStatus('searching');

    const fallbackDate = new Date(today);
    fallbackDate.setDate(today.getDate() + 1);

    try {
      const payload = {
        shiftId: nextShift?.id,
        date: nextShift?.date ?? formatDateParam(fallbackDate),
        time: nextShift?.type === 'night' ? 'evening' : 'morning',
        shiftStart: nextShift?.startTime,
        shiftEnd: nextShift?.endTime,
      };

      const response = await apiPost<{ replacementFound?: boolean }>('/api/shifts/find-replacement', payload);
      setShiftStatus(response.replacementFound ? 'found' : 'searching');
    } catch (err) {
      console.error('Failed to request replacement', err);
      setError('Не удалось отправить запрос на замену');
      setShiftStatus('normal');
    }
  };

  const handleHistoryClick = () => {
    setIsHistoryOpen(true);
  };

  const handleCalendarClick = () => {
    setIsHistoryOpen(true);
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

  const nextShiftDate = nextShift
    ? new Date(nextShift.date)
    : (() => {
        const fallback = new Date(today);
        fallback.setDate(today.getDate() + 1);
        return fallback;
      })();
  const formattedDate = nextShiftDate.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  const nextShiftStart = nextShift?.startTime ?? '9:00';
  const nextShiftEnd = nextShift?.endTime ?? '15:00';

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

      {error && <div className="error-banner">{error}</div>}

      <div className="content">
        <div className="next-shift-wrapper">
          <NextShiftCard
            date={formattedDate}
            startTime={nextShiftStart}
            endTime={nextShiftEnd}
            onFindReplacement={handleFindReplacementClick}
            status={shiftStatus}
          />
        </div>

        <div className="month-section">
          <h2>В этом месяце</h2>
          <div className="month-cards">
            <div className="stats-card">
              <p className="stats-title">{monthStats.total} смен</p>
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
                  <span>{monthStats.day}</span>
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
                  <span>{monthStats.night}</span>
                </div>
              </div>
            </div>

            <div className="earnings-card">
              <p className="earnings-amount">+ {earnings.total} ₽</p>
              <p className="earnings-today">
                Сегодня <span className="earnings-today-amount">+{earnings.today} ₽</span>
              </p>
            </div>
          </div>
        </div>

        <div className="calendar" onClick={handleCalendarClick} style={{ cursor: 'pointer' }}>
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
            <h3>
              {monthNames[currentMonth]} {currentYear}
            </h3>
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

      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        month={currentMonth}
        year={currentYear}
      />
    </div>
  );
}