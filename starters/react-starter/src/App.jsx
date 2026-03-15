import { useState } from 'react'
import './App.css'

function App() {
  // 📝 À faire : Créer un état pour stocker les mots-clés
  // 📝 À faire : Créer un état pour stocker les idées générées
  // 📝 À faire : Créer un état pour gérer le chargement (loading)

  const generateIdea = async () => {
    // 📝 À faire : Appeler l'API http://localhost:3000/generate
    // N'oubliez pas de gérer le chargement !
  }

  return (
    <div className="App">
      {/* 🧩 Étape 1 : Le Header */}
      <header>
        <h1>SmartIdea 🚀</h1>
        <p>Le futur de vos projets commence ici.</p>
      </header>

      {/* 🧩 Étape 2 : Le Formulaire */}
      <main>
        <div className="form-container">
          <input 
            type="text" 
            placeholder="Ex: Sport, IA, Écologie..." 
          />
          <button onClick={generateIdea}>Générer avec l'IA</button>
        </div>

        {/* 🧩 Étape 3 & 4 : Résultats & Chargement */}
        <section className="results">
          {/* Affichez ici vos idées ou un loader */}
        </section>
      </main>
    </div>
  )
}

export default App
