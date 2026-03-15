const http = require('http');

const ideas = [
  "Une application de gestion de potager connectée avec de l'IA.",
  "Un assistant vocal pour les personnes âgées qui rappelle de prendre ses médicaments.",
  "Un réseau social dédié uniquement au partage de recettes de cuisine saines.",
  "Une plateforme de troc de vêtements locaux basée sur la géolocalisation.",
  "Un traducteur de langage des signes en temps réel via la webcam.",
  "Un coach sportif virtuel qui adapte les exercices selon ton humeur.",
  "Une application qui génère des listes de courses à partir de photos de ton frigo.",
  "Un simulateur de budget intelligent qui prédit tes dépenses futures.",
  "Un jeu éducatif pour apprendre le codage aux enfants avec des puzzles.",
  "Une plateforme de location de matériel de bricolage entre voisins."
];

const server = http.createServer((req, res) => {
  // CORS Headers pour permettre au client de faire des requêtes
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === '/generate' && (req.method === 'GET' || req.method === 'POST')) {
    // Simuler un délai de "réflexion de l'IA"
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * ideas.length);
      const response = {
        id: Date.now(),
        idea: ideas[randomIndex],
        timestamp: new Date().toISOString()
      };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(response));
    }, 1500);
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Route non trouvée' }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 Serveur IA lancé sur http://localhost:${PORT}`);
  console.log(`📡 Route disponible : /generate`);
});
