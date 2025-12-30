export default function ModalTrigger({ onOpen, children }) {
    return (
        <button onClick={onOpen}>
            {children}
        </button>
    );
}
