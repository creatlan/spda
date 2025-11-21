import { useState } from 'react';
import './Profile.css';

export default function Profile() {
  const [name, setName] = useState('Иван Иванов');
  const [position, setPosition] = useState('Официант');
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPosition, setIsEditingPosition] = useState(false);

  const positions = ['Официант', 'Раннер', 'Кухня'];

  const handleSaveName = () => {
    setIsEditingName(false);
    console.log('Name saved:', name);
  };

  const handleSavePosition = () => {
    setIsEditingPosition(false);
    console.log('Position saved:', position);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>Профиль</h1>
      </div>

      <div className="profile-content">
        <div className="profile-avatar">
          <svg fill="none" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="40" fill="#e5e5ea" />
            <path
              d="M24 60V56C24 53.8783 24.8429 51.8434 26.3431 50.3431C27.8434 48.8429 29.8783 48 32 48H48C50.1217 48 52.1566 48.8429 53.6569 50.3431C55.1571 51.8434 56 53.8783 56 56V60"
              stroke="#666666"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="40"
              cy="32"
              r="8"
              stroke="#666666"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="profile-section">
          <div className="profile-field">
            <label>Имя</label>
            {isEditingName ? (
              <div className="edit-field">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />
                <button className="save-button" onClick={handleSaveName}>
                  Сохранить
                </button>
              </div>
            ) : (
              <div className="field-value" onClick={() => setIsEditingName(true)}>
                <span>{name}</span>
                <svg fill="none" viewBox="0 0 24 24">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>

          <div className="profile-field">
            <label>Позиция</label>
            {isEditingPosition ? (
              <div className="edit-field">
                <select
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  autoFocus
                >
                  {positions.map((pos) => (
                    <option key={pos} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
                <button className="save-button" onClick={handleSavePosition}>
                  Сохранить
                </button>
              </div>
            ) : (
              <div className="field-value" onClick={() => setIsEditingPosition(true)}>
                <span>{position}</span>
                <svg fill="none" viewBox="0 0 24 24">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        <div className="profile-actions">
          <button className="logout-button">
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </div>
  );
}
