import './ConfirmModal.css';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Найти замену',
  cancelText = 'Отмена',
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-blur-container">
          <div className="modal-blur-mask" />
          <div className="modal-blur-effect" />
          <div className="modal-fill" />
          <div className="modal-glass-effect" />
        </div>
        
        <div className="modal-inner">
          <div className="modal-title">
            <p>{message}</p>
          </div>
          <div className="modal-buttons">
            <button className="modal-button modal-button-primary" onClick={onConfirm}>
              {confirmText}
            </button>
            <button className="modal-button modal-button-secondary" onClick={onClose}>
              {cancelText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}