import { useEffect } from "react";
import "./Modal.css";

/**
 * Modal React component
 *
 * Affiche une fenêtre modale conditionnelle permettant de montrer
 * un message de succès ou d'erreur à l'utilisateur.
 * Le modal peut être fermé en cliquant sur l’overlay, sur le bouton
 * ou via la touche Échap (optionnel).
 *
 * @component
 *
 * @param {Object} props - Propriétés du composant
 * @param {boolean} props.isOpen - Indique si le modal est visible ou non
 * @param {Function} props.onClose - Fonction appelée pour fermer le modal
 * @param {"success" | "error"} [props.type="success"] - Type du message affiché (impacte le style et l’accessibilité)
 * @param {string} [props.message=""] - Message affiché dans le modal
 * @param {boolean} [props.closeOnEsc=true] - Active ou non la fermeture du modal avec la touche Échap
 *
 * @returns {JSX.Element|null} Le composant Modal ou null s’il est fermé
 */

export default function Modal({
    isOpen,
    onClose,
    type = "success",
    message = "",
    closeOnEsc = true,
}) {
    /**
     * Gère le scroll du body lorsque le modal est ouvert
     */
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    /** Ferme le modal en appuyant sur ESC */
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
