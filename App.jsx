import { useState } from "react";
import Modal from "react-simple-modal"; // ou "./Modal"

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function saveEmployee() {
        // 👉 ton code existant peut rester
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        employees.push({ test: "employee" });
        localStorage.setItem("employees", JSON.stringify(employees));

        // 👉 ouverture du modal React
        setIsModalOpen(true);
    }

    return (
        <>
            {/* TON FORMULAIRE EXISTANT */}
            <button onClick={saveEmployee}>Save</button>

            {/* PLUGIN MODAL REACT */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                Employee Created!
            </Modal>
        </>
    );
}

export default App;
