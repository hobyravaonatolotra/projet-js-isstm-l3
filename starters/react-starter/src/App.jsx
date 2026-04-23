import React, { useState } from 'react'
import './App.css'
import Header from '../composants/Header'
import SearchForm from '../composants/SearchForm'

function App() {
  // 📝 À faire : Créer un état pour stocker les mots-clés
  const [keywords, setKeywords] = useState("")
  // 📝 À faire : Créer un état pour stocker les idées générées
  const [idea, setIdea] = useState(null)
  // 📝 À faire : Créer un état pour gérer le chargement (loading)
  const [isLoading, setIsLoading] = useState(false)


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
  }

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
            <div className="idea-card">
              <h2>Nouvelle Idée !</h2>
              <p>{idea.idea}</p> 
              <small>Généré le : {new Date(idea.timestamp).toLocaleTimeString()}</small>

            </div>

          )}

         </section>

      </main>
    </div>
  )
}

export default App
