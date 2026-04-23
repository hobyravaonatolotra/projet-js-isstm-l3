import React from 'react';

function IdeaCard({ idea, isFavorite, onToggleFavorite }) {
    return (
        <div className="idea-card">
            {/* Affichage des données du serveur */}
            <h2>{idea.title || "Idée IA"}</h2>
            <p>{idea.idea || "Aucune description disponible"}</p>

            {/* Bouton Favoris dynamique */}
            <button
                className={`fav-button ${isFavorite ? 'active' : ''}`}
                onClick={() => onToggleFavorite(idea)}
            >
                {isFavorite ? "❤️ Retirer" : "🤍 Enregistrer"}
            </button>
        </div>
    );
}

export default IdeaCard;