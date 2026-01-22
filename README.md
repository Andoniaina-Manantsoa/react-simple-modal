# @andoniaina/react-modal

Un composant **Modal React simple, léger et accessible**, prêt à l’emploi.  
Il permet d’afficher des messages de succès ou d’erreur avec gestion du scroll, fermeture par clic extérieur et via la touche **ESC**.

Idéal pour les applications React modernes.

---

## ✨ Fonctionnalités

- ✅ Modal contrôlée via la prop `isOpen`
- ✅ Fermeture par clic sur l’overlay
- ✅ Fermeture avec la touche **ESC** (configurable)
- ✅ Blocage du scroll du body lorsque le modal est ouvert
- ✅ Styles CSS inclus
- ✅ Types de modal : `success` et `error`
- ✅ Accessibilité intégrée (`role="dialog"`, `aria-modal`)

---

## ⚙️ Prérequis

- **Node.js recommandé** : `>= 18.x`
- **React** : `>= 17`

---

## 📦 Installation

```bash
npm install @andoniaina/react-modal

---

## Puis importe également le fichier CSS fourni par le package :

import "@andoniaina/react-modal/Modal.css";


## 🚀 Utilisation
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

🧩 Props
Prop	        Type	        Valeur par défaut	            Description
isOpen	      boolean	              —	              Contrôle l’affichage du modal
onClose	      function	            —	              Fonction appelée pour fermer le modal
type	  "success" | "error"	    "success"	          Type du modal (impacte le style et l’accessibilité)
message	       string	              ""	            Message affiché dans le modal
closeOnEsc	   boolean	           true	            Active la fermeture avec la touche ESC

## ♿ Accessibilité

role="dialog"

aria-modal="true"

aria-label dynamique selon le type (Succès ou Erreur)

Gestion clavier avec la touche ESC

## 📄 Licence

MIT © Andoniaina

export default App;
