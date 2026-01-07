import { useEffect } from "react";

export default function Modal({
    isOpen,
    onClose,
    type = "success",
    message = "",
    closeOnEsc = true,
}) {
    // Bloquer le scroll
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    // Fermer avec ESC
    useEffect(() => {
        if (!closeOnEsc) return;
        const handleKey = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [closeOnEsc, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="modal-overlay"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={type === "success" ? "Succès" : "Erreur"}
        >
            <div className={`modal ${type}`} onClick={(e) => e.stopPropagation()}>
                <p>{message}</p>
                <button onClick={onClose}>OK</button>
            </div>
        </div>
    );
}
