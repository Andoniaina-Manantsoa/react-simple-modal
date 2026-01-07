# @andoniaina/react-modal

Un composant **Modal React simple, léger et accessible**, prêt à l’emploi, avec gestion du scroll, fermeture par clic extérieur et touche ESC.

Idéal pour afficher des messages de succès, d’erreur ou des confirmations dans vos applications React.

---

## ✨ Fonctionnalités

- ✅ Modal contrôlée (`isOpen`)
- ✅ Fermeture par clic sur l’overlay
- ✅ Fermeture avec la touche **ESC**
- ✅ Blocage du scroll en arrière-plan
- ✅ Styles CSS inclus
- ✅ Types de modal (`success`, `error`)
- ✅ Accessible (`role="dialog"`, `aria-modal`)

---

## 📦 Installation

```bash
npm install @andoniaina/react-modal

## Utilisation basique
import { useState } from "react";
import { Modal } from "@andoniaina/react-modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Ouvrir la modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        type="success"
        message="L’opération a été effectuée avec succès !"
      />
    </>
  );
}

export default App;
