# Guide de l'Exercice : SmartIdea

Ce guide vous accompagne pas à pas pour construire votre application **SmartIdea** avec **React** ou **Vue.js**.

## Étape 1 : Créer le Composant Header
- Créez un composant simple `Header` qui affiche le titre "SmartIdea" et un slogan accrocheur.
- Ajoutez un peu de style (CSS simple ou framework CSS si vous préférez).

## Étape 2 : Le Formulaire de Saisie (Mots-clés)
- Créez un composant `SearchForm`.
- Ajoutez un champ `<input>` pour saisir des mots-clés (ex: "Sport", "IA", "Musique").
- Utilisez le **Two-Way Data Binding** (ou State en React) pour récupérer la valeur de l'input.
- Ajoutez un bouton "Générer avec l'IA".

## Étape 3 : L'Appel API (Le Cœur du Projet)
Vous avez deux choix pour obtenir vos idées de projets :

### Option A : Serveur Mock (Recommandé pour débuter)
- Lancez le serveur local : `cd server-mock && node server.js`.
- URL : `http://localhost:3000/generate` (Méthode GET ou POST).
- **Avantage** : Pas besoin de clé API, fonctionne hors-ligne.

### Option B : API Réelle (Google Gemini - Challenge !)
Si vous voulez utiliser une vraie IA, créez une clé gratuite sur [Google AI Studio](https://aistudio.google.com/).
- Vous devrez installer le SDK : `npm install @google/generative-ai`.
- Envoyez vos mots-clés et demandez à l'IA de générer une idée de projet JSON.
- **Attention** : Ne partagez JAMAIS votre clé API sur GitHub !

---

## Besoin d'aide ?
Consultez le fichier [GLOSSARY.md](./GLOSSARY.md) pour comprendre des mots comme *State*, *Props*, *Async/Await*, etc.

---

## Étape 4 : Affichage des Résultats
- Créez un composant `IdeaCard` pour afficher une idée de projet reçue.
- Affichez les résultats dans une liste propre sous le formulaire.

## Étape 5 : Système de Favoris (Challenge !)
- Ajoutez un bouton "Favoris ❤️" sur chaque carte.
- Sauvegardez les idées aimées dans le `localStorage` du navigateur.
- Affichez une section "Mes Favoris" qui persiste même si on rafraîchit la page.

## Étape 6 : Style & Responsive
- Assurez-vous que votre application est présentable sur mobile et ordinateur.
- Amusez-vous avec les couleurs (thème sombre/clair).

---

### Rappel des commandes utiles :
- **React** : `useState`, `useEffect`, `props`.
- **Vue** : `ref`, `onMounted`, `v-model`, `v-if`, `v-for`.
- **Fetch API** : `fetch('URL', { method: 'POST', body: ... })`.
