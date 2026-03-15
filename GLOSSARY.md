# Glossaire & Concepts : React vs Vue.js

Ce document est un guide de survie pour comprendre les termes techniques utilisés dans ce projet et dans le monde des frameworks JavaScript.

---

## Concepts Fondamentaux

| Mot-clé | Définition |
| :--- | :--- |
| **Framework** | Un ensemble d'outils et de règles de structure (ex: React, Vue) qui facilite le développement d'applications complexes. |
| **Composant** | Un morceau d'interface réutilisable (ex: un bouton, une barre de recherche). C'est la brique de base de votre application. |
| **State (Etat)** | La mémoire d'un composant. Si l'état change, le framework redessine l'interface automatiquement (principe de réactivité). |
| **Props** | (Propriétés) Données envoyées par un composant parent à un composant enfant pour le personnaliser. |
| **NPM** | Gestionnaire de paquets utilisé pour installer des bibliothèques (Node Package Manager). |
| **Vite** | L'outil moderne qui sert à lancer votre projet en développement et à construire les fichiers finaux. |

---

## Communication et Données

| Mot-clé | Définition |
| :--- | :--- |
| **API** | (Interface de Programmation) Un service distant qui fournit des données, généralement au format JSON. |
| **JSON** | Le format de texte standard pour échanger des données (ressemble à un objet JavaScript). |
| **Fetch** | La fonction JavaScript standard pour envoyer ou récupérer des données via le réseau. |
| **Asynchrone** | Une tâche qui prend du temps (ex: attendre la réponse d'un serveur) sans bloquer le reste du code. |
| **Async / Await** | Mots-clés permettant d'écrire du code asynchrone de manière plus lisible. |
| **Endpoint** | L'adresse URL précise d'une ressource sur une API (ex: /trending/movies). |
| **CORS** | Une sécurité du navigateur qui contrôle les autorisations de partage de données entre différents serveurs. |

---

## Outils de Développement

| Mot-clé | Définition |
| :--- | :--- |
| **Hook (React) / Ref (Vue)** | Fonctions spéciales permettant de gérer la logique interne (comme l'état) dans vos composants. |
| **LocalStorage** | Espace de stockage dans le navigateur pour conserver des informations après avoir fermé l'onglet. |
| **Mock** | Utilisation de données fictives (fausses données) pour tester l'application sans appeler une vraie API. |

---

## Dictionnaire Spécifique React

| Mot-clé | Rôle |
| :--- | :--- |
| **JSX** | Syntaxe permettant d'écrire du HTML directement dans le code JavaScript. |
| **useState** | Le Hook pour créer et modifier une variable d'état. |
| **useEffect** | Le Hook pour exécuter du code à des moments précis (ex: au chargement du composant). |
| **props** | Objet contenant toutes les propriétés reçues par le composant. |
| **React Router** | Bibliothèque permettant de gérer la navigation entre différentes pages. |

---

## Dictionnaire Spécifique Vue.js

| Mot-clé | Rôle |
| :--- | :--- |
| **SFC** | (Single File Component) Fichier .vue regroupant le template (HTML), le script (JS) et le style (CSS). |
| **ref()** | Fonction pour créer une variable réactive. On accède à sa valeur via .value dans le script. |
| **onMounted** | Fonction exécutée automatiquement quand le composant est affiché à l'écran. |
| **Directives** | Attributs spéciaux (v-if, v-for, v-model) qui ajoutent de la logique au HTML. |
| **v-model** | Permet de lier automatiquement le contenu d'un champ de saisie à une variable. |
| **Vue Router** | Le gestionnaire officiel pour créer une application multi-pages. |

---

## Tableau de Correspondance (Traducteur)

| Action | En React | En Vue.js |
| :--- | :--- | :--- |
| **Afficher une variable** | { title } | {{ title }} |
| **Boucler sur une liste** | movies.map(m => ...) | v-for="m in movies" |
| **Affichage conditionnel** | { loading && <p>...</p> } | v-if="loading" |
| **Créer un état** | useState([]) | ref([]) |
| **Evenement clic** | onClick={doSomething} | @click="doSomething" |
| **Passer une prop** | <Card movie={m} /> | <Card :movie="m" /> |

---

## Astuce pour l'exercice
N'essayez pas de tout apprendre par cœur. Utilisez ce glossaire comme une aide-mémoire pendant que vous codez. Si vous bloquez sur une syntaxe, consultez le tableau de correspondance !
