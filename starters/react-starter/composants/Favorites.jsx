import React from 'react';
import IdeaCard from './IdeaCard';

function Favorites({ favoriteList, onRemove }) {
    return (
        <section className="favorites-section">
            <h3>⭐ Mes Favoris ({favoriteList.length})</h3>

            {favoriteList.length === 0 ? (
                <p className="empty-msg">Votre liste est vide.</p>
            ) : (
                <div className="favorites-grid">
                    {favoriteList.map((fav) => (
                        <IdeaCard
                            key={fav.id}
                            idea={fav}
                            isFavorite={true}
                            onToggleFavorite={onRemove}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default Favorites;