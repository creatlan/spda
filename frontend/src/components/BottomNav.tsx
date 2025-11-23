import svgPaths from '../imports/iconPaths';
import availabilityPaths from '../imports/availabilityIconPaths';
import './BottomNav.css';

interface BottomNavProps {
  activePage: 'home' | 'availability' | 'schedule' | 'profile';
  onPageChange: (page: 'home' | 'availability' | 'schedule' | 'profile') => void;
}

export default function BottomNav({ activePage, onPageChange }: BottomNavProps) {
  return (
    <div className="bottom-nav">
      <button
        className={`nav-item ${activePage === 'home' ? 'active' : ''}`}
        onClick={() => onPageChange('home')}
      >
        <svg className="nav-icon" fill="none" viewBox="0 0 28 28">
          <path
            d={svgPaths.p30553100}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
        <span>Главная</span>
      </button>

      <button
        className={`nav-item ${activePage === 'availability' ? 'active' : ''}`}
        onClick={() => onPageChange('availability')}
      >
        <svg className="nav-icon" fill="none" viewBox="0 0 23 23">
          <path
            d={availabilityPaths.p21d8a8c0}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={availabilityPaths.p1949c672}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={availabilityPaths.pf89e900}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={availabilityPaths.p1536e780}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
        <span>Занятость</span>
      </button>

      <button
        className={`nav-item ${activePage === 'schedule' ? 'active' : ''}`}
        onClick={() => onPageChange('schedule')}
      >
        <svg className="nav-icon" fill="none" viewBox="0 0 28 28">
          <path
            d={svgPaths.p865db00}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
        <span>График</span>
      </button>

      <button
        className={`nav-item ${activePage === 'profile' ? 'active' : ''}`}
        onClick={() => onPageChange('profile')}
      >
        <svg className="nav-icon" fill="none" viewBox="0 0 28 28">
          <path
            d={svgPaths.p246e5270}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
        <span>Профиль</span>
      </button>
    </div>
  );
}