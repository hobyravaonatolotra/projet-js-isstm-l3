
import React , { useState, useEffect } from "react";
import Header from "../composants/Header"
import SearchForm from "../composants/SearchForm";
import IdeaCard from "../composants/IdeaCard";
import Favorites from "../composants/Favorites";
import "./App.css";

// URL du backend (Groupe 3)
const API_URL = "http://localhost:3000/generate";

function App() {
  // ── États principaux ──────────────────────────────────────
  const [ideas, setIdeas] = useState([]);           // idées reçues de l'API
  const [loading, setLoading] = useState(false);    // en cours de chargement ?
  const [error, setError] = useState(null);         // message d'erreur
  const [favorites, setFavorites] = useState(() => {
    // Initialisation depuis localStorage (Groupe 4 gère la persistence)
    try {
      const saved = localStorage.getItem("smartidea-favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sauvegarde les favoris dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("smartidea-favorites", JSON.stringify(favorites));
  }, [favorites]);

  // ── Fonction principale : fetch vers le backend ───────────
  async function handleSearch(keywords) {
    setLoading(true);   // affiche le spinner
    setError(null);     // efface l'erreur précédente
    setIdeas([]);       // vide les anciens résultats

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keywords }),
      });

      if (!response.ok) {
        throw new Error(`Erreur serveur : ${response.status}`);
      }

      const data = await response.json();
      setIdeas(data.ideas || []);

    } catch (err) {
      // Erreur réseau ou serveur non démarré
      setError("Impossible de contacter le serveur. Vérifie que le Groupe 3 a lancé server.js !");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false); // masque le spinner dans tous les cas
    }
  }

  // ── Gestion des favoris (utilisée par IdeaCard via prop) ──
  function toggleFavorite(idea) {
    setFavorites((prev) => {
      const exists = prev.some((f) => f.title === idea.title);
      if (exists) {
        // Retirer des favoris
        return prev.filter((f) => f.title !== idea.title);
      } else {
        // Ajouter aux favoris
        return [...prev, idea];
      }
    });
  }

  // ── Rendu ─────────────────────────────────────────────────
  return (
    <div className="app">
      {/* GROUPE 1 : composant d'en-tête */}
      <Header />

      {/* GROUPE 1 : formulaire de recherche
          onSearch = notre fonction handleSearch */}
      <SearchForm onSearch={handleSearch} />

      {/* État de chargement */}
      {loading && (
        <p className="loading">Génération des idées en cours</p>
      )}

      {/* Message d'erreur */}
      {error && (
        <p className="error-message">⚠️ {error}</p>
      )}

      {/* GROUPE 4 : grille de résultats */}
      {ideas.length > 0 && (
        <div className="results-grid">
          {ideas.map((idea, index) => (
            <IdeaCard
              key={index}
              idea={idea}
              isFavorite={favorites.some((f) => f.title === idea.title)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}

      {/* GROUPE 4 : section favoris */}
      <Favorites
        favoriteList={favorites}
        onRemove={toggleFavorite}
    
      />
    </div>
  );
}

export default App;