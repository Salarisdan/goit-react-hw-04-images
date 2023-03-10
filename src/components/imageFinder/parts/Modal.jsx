import React, { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ modalClose, children }) => {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      modalClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className={css.Overlay} onClick={modalClose}>
      <div>
        <div className={css.Modal}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
