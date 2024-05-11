import './SuccesfulModal.css';

function SuccesfulModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-content">
          <h2>Reservation Submitted Successfully!</h2>
          <p>Your reservation has been successfully submitted.</p>
        </div>
      </div>
    </div>
  );
}

export default SuccesfulModal;

