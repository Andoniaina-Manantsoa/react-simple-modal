🧩 Problématique initiale
Limites de la solution jQuery

Manipulation directe du DOM

Couplage fort entre HTML et JavaScript

Difficulté de maintenance à grande échelle

Dépendance à une librairie externe (jQuery)

Intégration complexe dans une application React

👉 Dans une application React, l’utilisation de jQuery va à l’encontre du Virtual DOM et des bonnes pratiques React.

🔄 Solution mise en place

Le plugin jquery-modal a été remplacé par un composant React contrôlé par l’état (state), respectant :

le flux de données unidirectionnel

la logique déclarative de React

la réutilisabilité des composants

🔍 Comparaison fonctionnelle
Fonctionnalité	        jquery-modal	        React Modal
Ouverture / fermeture	Attribut HTML + JS	    State React
Overlay	                Oui	                    Oui
Fermeture par ESC	    Oui	                    Oui
Fermeture par clic	    Oui	                    Oui
Animation	            jQuery	                CSS
Événements	            jQuery events	        Props & callbacks
Accessibilité	        Limitée	                aria-modal, role="dialog"
Dépendance externe	    jQuery	                Aucune

🧠 Différence de paradigme
Approche jQuery (impérative)
<a href="#modal" rel="modal:open">Open</a>

$('#modal').modal({ escapeClose: true });

- Le DOM est modifié directement
- Le comportement dépend de sélecteurs
- La logique est dispersée

Approche React (déclarative)
const [isOpen, setIsOpen] = useState(false);

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  Contenu du modal
</Modal>

- L’UI dépend de l’état
- La logique est centralisée
- Le composant est réutilisable

🔁 Correspondance des API
jquery-modal	            Implémentation React
rel="modal:open"	        <ModalTrigger />
$.modal.close()	            setIsOpen(false)
escapeClose	                closeOnEsc
clickClose	                closeOnOverlayClick
fadeDuration	            animationDuration
modal:open	                onAfterOpen
modal:close	                onAfterClose

🧱 Architecture du composant
src/
├── components/
│   ├── Modal/
│   │   ├── Modal.jsx
│   │   └── Modal.css
│   └── ModalTrigger.jsx
├── App.jsx

- Modal.jsx : gestion de l’ouverture, fermeture et événements
- Modal.css : styles et animations
- ModalTrigger.jsx : remplacement du déclenchement jQuery

♿ Accessibilité
Le composant React respecte les bonnes pratiques d’accessibilité :
* role="dialog"
* aria-modal="true"
* Fermeture via la touche Escape
* Blocage du scroll du body lors de l’ouverture

Ces éléments améliorent l’expérience utilisateur par rapport à la version jQuery.

✅ Bénéfices de la migration

    ❌ Suppression complète de jQuery
    ♻️ Code plus maintenable
    🧠 Logique centralisée
    🚀 Intégration native dans React
    📈 Performance et lisibilité améliorées