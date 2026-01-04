import { useEffect } from "react";
import "./Modal.css";

export default function Modal({
    isOpen,
    onClose,
    children,
    closeOnEsc = true,
    closeOnOverlayClick = true,
    animationDuration = 300,
    onBeforeOpen,
    onAfterOpen,
    onBeforeClose,
    onAfterClose,
}) {
    useEffect(() => {
        if (isOpen) {
            onBeforeOpen?.();
            onAfterOpen?.();
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        if (!closeOnEsc) return;

        const handleKey = (e) => {
            if (e.key === "Escape") {
                onBeforeClose?.();
                onClose();
                onAfterClose?.();
            }
        };

        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [closeOnEsc, onClose]);

    if (!isOpen) return null;

    const handleOverlayClick = () => {
        if (!closeOnOverlayClick) return;
        onBeforeClose?.();
        onClose();
        onAfterClose?.();
    };

    return (
        <div
            className="modal-overlay show"
            style={{ transitionDuration: `${animationDuration}ms` }}
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
        >
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                {/* CROIX DE FERMETURE */}
                <button className="modal-close" onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    );
}
