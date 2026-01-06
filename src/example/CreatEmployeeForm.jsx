import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Modal } from "../index";

// Schema Zod
const employeeSchema = z.object({
    firstName: z.string().min(2, "Prénom trop court"),
    lastName: z.string().min(2, "Nom trop court"),
    email: z.string().email("Email invalide"),
});

export default function CreateEmployeeForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("success");
    const [modalMessage, setModalMessage] = useState("");

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(employeeSchema),
    });

    const onSubmit = (data) => {
        try {
            // Ici, tu peux sauvegarder dans localStorage ou API
            setModalType("success");
            setModalMessage("Employé créé avec succès !");
            setIsModalOpen(true);
        } catch (err) {
            setModalType("error");
            setModalMessage("Une erreur est survenue !");
            setIsModalOpen(true);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName")} placeholder="Prénom" />
                {errors.firstName && <p>{errors.firstName.message}</p>}

                <input {...register("lastName")} placeholder="Nom" />
                {errors.lastName && <p>{errors.lastName.message}</p>}

                <input {...register("email")} placeholder="Email" />
                {errors.email && <p>{errors.email.message}</p>}

                <button type="submit">Save</button>
            </form>

            <Modal
                isOpen={isModalOpen}
                type={modalType}
                message={modalMessage}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
