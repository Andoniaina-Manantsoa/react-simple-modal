import { useState } from "react";
import Modal from "./components/Modal/Modal";
import ModalTrigger from "./components/ModalTrigger";

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ModalTrigger onOpen={() => setIsOpen(true)}>
                Open Modal
            </ModalTrigger>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                closeOnEsc
                closeOnOverlayClick
                animationDuration={300}
                onBeforeOpen={() => console.log("before open")}
                onAfterClose={() => console.log("after close")}
            >
                <h2>Hello Modal</h2>
                <p>React version of jquery-modal</p>
                <button onClick={() => setIsOpen(false)}>Close</button>
            </Modal>
        </>
    );
}
