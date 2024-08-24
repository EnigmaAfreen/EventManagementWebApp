import React from "react";

const Modal = ({ isVisible, onClose, content }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times; {/* HTML entity for "X" */}
        </button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
