import './ConfirmModal.css';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

export default function ConfirmModal({ isOpen, onClose, onConfirm, title, message }: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-alert">
          {/* Blur effect */}
          <div className="modal-blur-wrapper">
            <div className="modal-mask">
              <div className="modal-mask-inner" />
            </div>
            <div className="modal-blur" />
          </div>

          {/* Fill */}
          <div className="modal-fill">
            <div className="modal-fill-overlay">
              <div className="modal-fill-dodge" />
              <div className="modal-fill-bg" />
            </div>
          </div>

          {/* Glass effect */}
          <div className="modal-glass" />

          {/* Content */}
          <div className="modal-content">
            <div className="modal-title-section">
              <p className="modal-title">{message}</p>
            </div>

            <div className="modal-buttons">
              <button className="modal-button primary" onClick={onConfirm}>
                <div className="modal-button-bg primary-bg" />
                <span>Найти замену</span>
              </button>
              <button className="modal-button secondary" onClick={onClose}>
                <div className="modal-button-bg secondary-bg" />
                <span>Отмена</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
