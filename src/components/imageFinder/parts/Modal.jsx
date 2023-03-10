import React, { useEffect, useCallback } from 'react';
import css from './Modal.module.css';

const Modal = ({ modalClose, children }) => {
const handleKeyDown = useCallback((e) => {
if (e.code === 'Escape') {
modalClose();
}
}, [modalClose]);

useEffect(() => {
window.addEventListener('keydown', handleKeyDown);
return () => {
window.removeEventListener('keydown', handleKeyDown);
};
}, [handleKeyDown]);

const handleOverlayClick = useCallback(() => {
modalClose();
}, [modalClose]);

return (
<div className={css.Overlay} onClick={handleOverlayClick}>
<div>
<div className={css.Modal}>{children}</div>
</div>
</div>
);
};

export default Modal;