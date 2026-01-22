# 📦 React Simple Modal

Un composant **Modal React simple, léger et réutilisable**, sans dépendances externes, idéal pour afficher des messages de confirmation ou d’information.

---

## ✨ Fonctionnalités

* 📌 Facile à intégrer
* ⚛️ Compatible React 18+
* 🎨 Style personnalisable via CSS
* ♻️ Réutilisable
* 🚫 Aucune dépendance externe

---

## 📥 Installation

Installe le package via **npm** :

```bash
npm install @andoniaina/react-modal
```

ou avec **yarn** :

```bash
yarn add @andoniaina/react-modal
```

---

## 🚀 Utilisation

### 1️⃣ Import du composant

```js
import { Modal } from "@andoniaina/react-modal";
import "@andoniaina/react-modal/Modal.css";
```

---

### 2️⃣ Exemple simple

```jsx
import { useState } from "react";
import { Modal } from "@andoniaina/react-modal";
import "@andoniaina/react-modal/Modal.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Ouvrir le modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Succès"
      >
        <p>L'employé a été créé avec succès.</p>
      </Modal>
    </div>
  );
}

export default App;
```

---

## 🧩 Props disponibles

| Prop       | Type        | Description                     |
| ---------- | ----------- | ------------------------------- |
| `isOpen`   | `boolean`   | Ouvre ou ferme le modal         |
| `onClose`  | `function`  | Fonction appelée à la fermeture |
| `title`    | `string`    | Titre du modal                  |
| `children` | `ReactNode` | Contenu du modal                |

---

## 🎨 Personnalisation du style

Le composant inclut un fichier CSS par défaut :

```js
import "@andoniaina/react-modal/Modal.css";
```

Tu peux :

* modifier ce fichier
* ou surcharger les classes CSS dans ton projet

---

## 🛠️ Cas d’usage courant

* Confirmation de création
* Message de succès
* Message d’erreur
* Information utilisateur

---

## 📁 Structure du projet

```bash
react-simple-modal/
├── src/
│   ├── Modal.jsx
│   ├── Modal.css
│   └── index.js
├── package.json
├── README.md
└── LICENSE
```

---

## 🧪 Compatibilité

* React 18+
* Fonctionne avec Vite, CRA, Next.js
* Node > 20

---

## 📄 Licence

MIT © Andoniaina

---

## 🎓 Contexte pédagogique

Ce package a été développé dans le cadre du **projet HRnet (OpenClassrooms)**, visant à convertir une application jQuery vers React.
