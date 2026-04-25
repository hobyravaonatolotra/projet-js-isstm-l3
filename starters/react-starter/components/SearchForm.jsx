// SearchForm.jsx — GROUPE 1

import React, { useState } from "react";

function SearchForm({ onSearch }) {
  const [keywords, setKeywords] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!keywords.trim()) return;
    onSearch(keywords);
  }

  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input type="text" className="search-input" placeholder="Ex : application mobile, sport, IA..." value={keywords} onChange={(e) => setKeywords(e.target.value)}/>
        <button type="submit" className="search-button">
          Générer avec l'IA
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
