<script setup>
import { ref } from 'vue'

// 📝 À faire : Créer une ref pour stocker les mots-clés
// 📝 À faire : Créer une ref pour stocker les idées générées
// 📝 À faire : Créer une ref pour gérer le chargement (loading)

const generateIdea = async () => {
  // 📝 À faire : Appeler l'API http://localhost:3000/generate
  // N'oubliez pas de gérer le chargement !
}
</script>

<template>
  <div class="App">
    <!-- 🧩 Étape 1 : Le Header -->
    <header>
      <h1>SmartIdea 🚀 (Version Vue.js)</h1>
      <p>Le futur de vos projets commence ici.</p>
    </header>

    <!-- 🧩 Étape 2 : Le Formulaire -->
    <main>
      <div class="form-container">
        <input 
          type="text" 
          placeholder="Ex: Sport, IA, Écologie..." 
        />
        <button @click="generateIdea">Générer avec l'IA</button>
      </div>

      <!-- 🧩 Étape 3 & 4 : Résultats & Chargement -->
      <section class="results">
        <!-- Affichez ici vos idées ou un loader -->
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Un peu de style pour commencer */
.App {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
  text-align: center;
}
.form-container {
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
  justify-content: center;
}
input {
  padding: 0.8rem;
  width: 300px;
  border-radius: 8px;
  border: 1px solid #ddd;
}
button {
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  background-color: #42b883;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
