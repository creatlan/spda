import { useEffect, useState } from 'react';
import svgPaths from '../imports/svg-xxbelapiyp';
import './HistoryModal.css';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  month: number; // 0-11
  year: number;
}

interface ShiftHistoryItem {
  date: string;
  type: 'day' | 'night';
  hours: number;
  earnings: number;
}

interface MonthStats {
  totalShifts: number;
  totalHours: number;
  totalEarnings: number;
  dayShifts: number;
  dayHours: number;
  dayEarnings: number;
  nightShifts: number;
  nightHours: number;
  nightEarnings: number;
  shifts: ShiftHistoryItem[];
}

interface AllTimeStats {
  totalShifts: number;
  totalHours: number;
  totalEarnings: number;
  dayShifts: number;
  dayHours: number;
  dayEarnings: number;
  nightShifts: number;
  nightHours: number;
  nightEarnings: number;
}

export default function HistoryModal({ isOpen, onClose, month, year }: HistoryModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [allTimeStats, setAllTimeStats] = useState<AllTimeStats | null>(null);
  const [monthStats, setMonthStats] = useState<MonthStats | null>(null);

  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      fetchHistoryData();
      // Блокируем скролл основной страницы
      document.body.style.overflow = 'hidden';
    } else {
      // Разблокируем скролл
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, month, year]);

  const fetchHistoryData = async () => {
    // TODO: Replace with actual API call
    // GET /api/history/all-time
    // GET /api/history/month?month=${month}&year=${year}
    
    // Mock data
    const mockAllTime: AllTimeStats = {
      totalShifts: 30,
      totalHours: 240,
      totalEarnings: 34075,
      dayShifts: 18,
      dayHours: 144,
      dayEarnings: 14075,
      nightShifts: 12,
      nightHours: 96,
      nightEarnings: 14075
    };

    const mockMonth: MonthStats = {
      totalShifts: 9,
      totalHours: 72,
      totalEarnings: 24075,
      dayShifts: 5,
      dayHours: 40,
      dayEarnings: 14075,
      nightShifts: 4,
      nightHours: 32,
      nightEarnings: 14000,
      shifts: [
        { date: '01.11.2024', type: 'day', hours: 6, earnings: 4075 },
        { date: '03.11.2024', type: 'day', hours: 6, earnings: 1075 },
        { date: '04.11.2024', type: 'night', hours: 6, earnings: 4075 },
        { date: '06.11.2024', type: 'day', hours: 6, earnings: 475 },
        { date: '07.11.2024', type: 'night', hours: 6, earnings: 4075 },
      ]
    };

    setAllTimeStats(mockAllTime);
    setMonthStats(mockMonth);
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className={`history-modal-overlay ${isAnimating ? 'open' : ''}`}>
      <div className={`history-modal ${isAnimating ? 'open' : ''}`}>
        {/* Header */}
        <div className="history-modal-header">
          <button className="history-close-btn text-[rgb(0,0,0)]" onClick={handleClose}>
            Закрыть
          </button>
          <h2 className="history-modal-title">История</h2>
          <div className="history-header-spacer"></div>
        </div>

        {/* Content */}
        <div className="history-modal-content">
          {/* All Time Stats - Black Card */}
          {allTimeStats && (
            <div className="history-card-total">
              <h3>Всего</h3>
              <div className="history-stats-main">
                <div className="history-stat-group">
                  <span className="history-stat-value">{allTimeStats.totalShifts} смен</span>
                  <span className="history-stat-detail">{allTimeStats.totalHours} часов</span>
                </div>
                <span className="history-stat-earnings">+{allTimeStats.totalEarnings} ₽</span>
              </div>
              
              <div className="history-breakdown">
                <div className="history-breakdown-item">
                  <svg className="history-icon-sun" fill="none" viewBox="0 0 22 22">
                    <path
                      d={svgPaths.p23f74c00}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="history-breakdown-label">{allTimeStats.dayShifts} дневных</span>
                  <span className="history-breakdown-detail">{allTimeStats.dayHours} часов</span>
                  <span className="history-breakdown-earnings">+{allTimeStats.dayEarnings} ₽</span>
                </div>

                <div className="history-breakdown-item">
                  <svg className="history-icon-moon" fill="none" viewBox="0 0 20 20">
                    <path
                      d={svgPaths.pccb100}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="history-breakdown-label">{allTimeStats.nightShifts} вечерних</span>
                  <span className="history-breakdown-detail">{allTimeStats.nightHours} часов</span>
                  <span className="history-breakdown-earnings">+{allTimeStats.nightEarnings} ₽</span>
                </div>
              </div>
            </div>
          )}

          {/* Month Title */}
          <h3 className="history-month-title">{monthNames[month]}</h3>

          {/* Month Stats - White Card */}
          {monthStats && (
            <div className="history-card-month">
              <div className="history-stats-main">
                <div className="history-stat-group">
                  <span className="history-stat-value-month">{monthStats.totalShifts} смен</span>
                  <span className="history-stat-detail-month">{monthStats.totalHours} часа</span>
                </div>
                <span className="history-stat-earnings-green">+{monthStats.totalEarnings} ₽</span>
              </div>

              <div className="history-breakdown">
                <div className="history-breakdown-item">
                  <svg className="history-icon-sun-month" fill="none" viewBox="0 0 22 22">
                    <path
                      d={svgPaths.p23f74c00}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="history-breakdown-label-month">{monthStats.dayShifts} дневных</span>
                  <span className="history-breakdown-detail-month">{monthStats.dayHours} часов</span>
                  <span className="history-breakdown-earnings-green">+{monthStats.dayEarnings} ₽</span>
                </div>

                <div className="history-breakdown-item">
                  <svg className="history-icon-moon-month" fill="none" viewBox="0 0 20 20">
                    <path
                      d={svgPaths.pccb100}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="history-breakdown-label-month">{monthStats.nightShifts} вечерних</span>
                  <span className="history-breakdown-detail-month">{monthStats.nightHours} часов</span>
                  <span className="history-breakdown-earnings-green">+{monthStats.nightEarnings} ₽</span>
                </div>
              </div>
            </div>
          )}

          {/* Shift List */}
          {monthStats && monthStats.shifts.length > 0 && (
            <div className="history-shift-list">
              {monthStats.shifts.map((shift, index) => (
                <div key={index} className="history-shift-item">
                  {shift.type === 'day' ? (
                    <svg className="history-shift-icon-sun" fill="none" viewBox="0 0 22 22">
                      <path
                        d={svgPaths.p23f74c00}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  ) : (
                    <svg className="history-shift-icon-moon" fill="none" viewBox="0 0 20 20">
                      <path
                        d={svgPaths.pccb100}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  )}
                  <span className="history-shift-date">{shift.date}</span>
                  <span className="history-shift-hours">{shift.hours} часов</span>
                  <span className="history-shift-earnings">+{shift.earnings} ₽</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}