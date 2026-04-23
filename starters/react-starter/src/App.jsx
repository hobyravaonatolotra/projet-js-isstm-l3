import React, { useState } from 'react'
import './App.css'
import Header from '../composants/Header'
import SearchForm from '../composants/SearchForm'
import IdeaCard from '../composants/IdeaCard'
import Favorites from '../composants/Favorites'

function App() {
  // 📝 À faire : Créer un état pour stocker les mots-clés
  const [keywords, setKeywords] = useState("")
  // 📝 À faire : Créer un état pour stocker les idées générées
  const [idea, setIdea] = useState(null)
  // 📝 À faire : Créer un état pour gérer le chargement (loading)
  const [isLoading, setIsLoading] = useState(false)
  // 📝 À faire : Créer un état pour garder la liste de favoris
  const [favorites, setFavorites] = useState(() => {
    // On essaie de récupérer ce qui est dans le localStorage
    const saved = localStorage.getItem("smart-favorites");
    // Si ça existe, on le transforme en objet JS, sinon on met un tableau vide []
    return saved ? JSON.parse(saved) : [];
  });


  const generateIdea = async (searchKeywords) => {
    // 📝 À faire : Appeler l'API http://localhost:3000/generate
    // N'oubliez pas de gérer le chargement !
    setIsLoading(true);
    setKeywords(searchKeywords); // Stockage des mots-clés

    try {
      // Appel vers le serveur du Groupe 3
      const response = await fetch("http://localhost:3000/generate");
      const data = await response.json();

      setIdea(data); // Stockage du JSON {title, description}
    } catch (error) {
      console.error("Erreur de connexion au backend :", error);
    } finally {
      setIsLoading(false); //pour enlever le chargement
    }

  };

  const toggleFavorite = (selectedIdea) => {
    let updated;
    const isPresent = favorites.some(f => f.id === selectedIdea.id);

    if (isPresent) {
      updated = favorites.filter(f => f.id !== selectedIdea.id);
    } else {
      updated = [...favorites, selectedIdea];
    }

    setFavorites(updated);
    localStorage.setItem("smart-favorites", JSON.stringify(updated));
  };

  return (
    <div className="App">
      {/* 🧩 Étape 1 : Le Header */}
      <Header />

      {/* 🧩 Étape 2 : Le Formulaire */}
      <main>
        <div className="form-container">
          <SearchForm onSearch={generateIdea} />

        </div>

        {/* 🧩 Étape 3 & 4 : Résultats & Chargement */}
        <section className="results">
          {/* Affichez ici vos idées ou un loader */}
          {isLoading && <p>⏳ L'IA choisit une idée pour vous...</p>}

          {idea && !isLoading && (
            <IdeaCard
              idea={idea}
              onToggleFavorite={toggleFavorite}
              isFavorite={favorites.some(f => f.id === idea.id)}
            />

          )}

        </section>
        

        {/* On ajoute le composant Favorites en bas */}
        <Favorites
          favoriteList={favorites}
          onRemove={toggleFavorite}
        />

      </main>
    </div>
  );
}

export default App
