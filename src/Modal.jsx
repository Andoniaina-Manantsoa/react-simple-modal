import React from "react";
import "./modal.css";

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                {children}
                <button className="modal-close" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default Modal;
