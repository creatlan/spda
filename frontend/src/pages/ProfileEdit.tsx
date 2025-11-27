import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Pencil, Check } from 'lucide-react';
import { apiGet, apiPut } from '../utils/api';
import './ProfileEdit.css';

export default function ProfileEdit() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('Иван');
  const [lastName, setLastName] = useState('Иванов');
  const [position, setPosition] = useState('Официант');
  const [error, setError] = useState<string | null>(null);
  const [showPositionMenu, setShowPositionMenu] = useState(false);

  const positions = ['Повар', 'Официант', 'Раннер'];

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await apiGet<{ name?: string; position?: string }>('/api/profile');
        if (data.name) {
          const [first, ...rest] = data.name.split(' ');
          setFirstName(first);
          setLastName(rest.join(' '));
        }
        if (data.position) {
          setPosition(data.position);
        }
      } catch (err) {
        console.error('Failed to load profile for edit', err);
        setError('Не удалось загрузить профиль');
      }
    };

    loadProfile();
  }, []);

  const handleSave = async () => {
    const profileData = {
      name: `${firstName} ${lastName}`.trim(),
      position,
    };

    try {
      await apiPut('/api/profile', profileData);
      setError(null);
    } catch (err) {
      console.error('Failed to save profile', err);
      setError('Не удалось сохранить профиль');
      return;
    }

    // Navigate back to profile
    navigate('/profile');
  };

  const handleBack = () => {
    navigate('/profile');
  };

  const handlePositionSelect = (pos: string) => {
    setPosition(pos);
    setShowPositionMenu(false);
  };

  return (
    <div className="profile-edit-page">
      <div className="edit-header">
        <button className="back-btn" onClick={handleBack}>
          <ChevronLeft size={20} />
          Назад
        </button>
        <h2>Редактирование</h2>
      </div>

      {error && <div className="error-banner">{error}</div>}

      <div className="photo-section">
        <div className="photo-edit-btn">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=400&fit=crop" 
            alt="Profile"
          />
          <div className="pencil-overlay">
            <Pencil size={26} />
          </div>
        </div>

        <div className="name-fields">
          <input 
            type="text" 
            className="name-input" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Имя"
          />
          <div className="field-separator" />
          <input 
            type="text" 
            className="name-input" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Фамилия"
          />
        </div>
      </div>

      <div className="position-section">
        <button 
          className="position-select"
          onClick={() => setShowPositionMenu(!showPositionMenu)}
        >
          {position}
          <ChevronLeft className={`chevron ${showPositionMenu ? 'open' : ''}`} size={20} />
        </button>

        {showPositionMenu && (
          <div className="position-menu">
            <div className="menu-header">Позиция</div>
            {positions.map((pos) => (
              <button
                key={pos}
                className={`menu-item ${position === pos ? 'selected' : ''}`}
                onClick={() => handlePositionSelect(pos)}
              >
                {position === pos && <Check size={16} />}
                {pos}
              </button>
            ))}
          </div>
        )}
      </div>

      <button className="save-btn" onClick={handleSave}>
        Сохранить
      </button>
    </div>
  );
}
