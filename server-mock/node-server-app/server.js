const http = require('http');

// On utilise 'let' pour pouvoir ajouter des idées dedans
let ideas = [
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

const PORT = 3000;
const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // nouvel zone : accueill
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify({message: "Serveur actif!"}));
  }

  // NOUVELLE ROUTE : Retourner le projet IA Sport
  if (req.url === '/project' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify({
      title: "Projet IA Sport",
      description: "Application intelligente sportive"
    }));
  }

  if (req.url === '/generate' && (req.method === 'GET' || req.method === 'POST')) {
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
    return;
  }

    // NOUVELLE ROUTE : Ajouter une idée (POST)
  if (req.url === '/add' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      const newIdea = JSON.parse(body).idea;
      if (newIdea) {
        ideas.push(newIdea); // Ajout à la liste en mémoire
        res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ message: "Idée ajoutée !", total: ideas.length }));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ error: "L'idée est vide" }));
      }
    });
    return;
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Route non trouvée' }));
  }
});

server.listen(3000, () => {
  console.log(`🚀 Serveur IA lancé sur http://localhost:${PORT}`);
  console.log(`📡 Route disponible : /generate`);
});

