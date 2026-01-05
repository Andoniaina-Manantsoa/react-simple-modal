import { useEffect } from "react";

const VARIANTS = {
    default: {
        border: "border-gray-200",
        icon: null,
    },
    success: {
        border: "border-green-500",
        title: "text-green-600",
    },
    error: {
        border: "border-red-500",
        title: "text-red-600",
    },
};

export default function Modal({
    isOpen,
    onClose,
    children,
    variant = "default",
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

    const currentVariant = VARIANTS[variant] || VARIANTS.default;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity"
            style={{ transitionDuration: `${animationDuration}ms` }}
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
        >
            <div
                className={`relative w-[90%] max-w-md rounded-xl bg-white px-10 py-8 text-center shadow-xl border-2 ${currentVariant.border} animate-fadeIn`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Icône variant */}
                {currentVariant.icon && (
                    <div className="mb-4 text-4xl">
                        {currentVariant.icon}
                    </div>
                )}

                {/* Bouton fermeture */}
                <button
                    className="absolute top-3 right-3 text-2xl font-bold text-gray-500 hover:text-black"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    ×
                </button>

                {/* Contenu */}
                <div className={currentVariant.title}>
                    {children}
                </div>
            </div>
        </div>
    );
}
