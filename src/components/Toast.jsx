import React, { useState, useEffect } from 'react';

const Toast = ({ message, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose(); // Call onClose callback when the toast duration expires
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  return (
    <div className={`toast ${visible ? 'show' : 'hide'}`}>
      <div className="toast-message">{message}</div>
      <button className="toast-close" onClick={handleClose}>
        &times;
      </button>
    </div>
  );
};

export default Toast;
