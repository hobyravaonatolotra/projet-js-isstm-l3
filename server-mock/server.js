/*
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
*/

// ============================================================
// server.js — GROUPE 3 : Backend Mock Server
// ============================================================
// Rôle : Serveur Node.js local qui simule une API IA.
//        Il reçoit des mots-clés et retourne des idées de projets.
//
// Lancement :
//   cd server-mock
//   node server.js
//
// Endpoint disponible :
//   POST http://localhost:3000/generate
//   Body JSON : { "keywords": "sport, mobile, IA" }
// ============================================================

const http = require("http");

const PORT = 3000;

// Base de données fictive d'idées classées par thème
// Le serveur choisit des idées selon les mots-clés reçus
const IDEAS_DB = {
  sport: [
    { title: "CoachIA Sport", description: "Application mobile qui analyse tes performances sportives grâce à l'IA et te propose un programme personnalisé." },
    { title: "TeamSync", description: "Plateforme de coordination pour équipes sportives amateurs avec planning intelligent et stats en temps réel." },
    { title: "NutriAthlete", description: "Assistant nutritionnel pour sportifs qui adapte les repas selon l'effort fourni et les objectifs." },
  ],
  mobile: [
    { title: "PocketMentor", description: "Application mobile de coaching personnel IA disponible 24h/24 pour répondre à tes questions professionnelles." },
    { title: "LocalExplorer", description: "App qui découvre des lieux cachés près de toi grâce à l'IA et aux avis de la communauté locale." },
    { title: "FocusFlow", description: "Application de productivité qui apprend tes habitudes et optimise automatiquement ton planning journalier." },
  ],
  education: [
    { title: "LearnPath", description: "Plateforme d'apprentissage qui crée un cursus sur-mesure selon ton niveau, tes objectifs et ton rythme." },
    { title: "FlashGenius", description: "Application de révision par flashcards intelligentes qui adapte la difficulté selon tes réponses en temps réel." },
    { title: "CodeMentor Junior", description: "Outil interactif qui enseigne le code aux enfants via des mini-jeux et des projets créatifs." },
  ],
  sante: [
    { title: "MindBalance", description: "Application de bien-être mental qui propose des exercices de méditation et suit ton humeur quotidienne." },
    { title: "SleepDoctor", description: "Assistant IA qui analyse la qualité de ton sommeil et te suggère des ajustements de routine." },
    { title: "SymptomCheck", description: "Outil de pré-diagnostic intelligent qui oriente vers le bon spécialiste selon tes symptômes décrits." },
  ],
  default: [
    { title: "Projet IA Innovant", description: "Application intelligente qui utilise l'IA pour automatiser des tâches complexes et améliorer la productivité." },
    { title: "SmartConnect", description: "Plateforme de mise en relation intelligente entre professionnels grâce à un algorithme de matching avancé." },
    { title: "EcoTracker", description: "Application de suivi de l'empreinte carbone personnelle avec suggestions d'actions concrètes et gamification." },
  ],
};

// Fonction qui choisit des idées selon les mots-clés
function generateIdeas(keywords) {
  const kw = (keywords || "").toLowerCase();
  let pool = [...IDEAS_DB.default];

  // On enrichit le pool selon les mots-clés détectés
  if (kw.includes("sport") || kw.includes("fitness") || kw.includes("musculation")) {
    pool = [...IDEAS_DB.sport, ...pool];
  }
  if (kw.includes("mobile") || kw.includes("app") || kw.includes("telephone")) {
    pool = [...IDEAS_DB.mobile, ...pool];
  }
  if (kw.includes("education") || kw.includes("ecole") || kw.includes("apprendre") || kw.includes("formation")) {
    pool = [...IDEAS_DB.education, ...pool];
  }
  if (kw.includes("sante") || kw.includes("medical") || kw.includes("bien-etre") || kw.includes("sommeil")) {
    pool = [...IDEAS_DB.sante, ...pool];
  }

  // On mélange et on retourne 3 idées aléatoires
  const shuffled = pool.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}

// ── Création du serveur HTTP ──────────────────────────────
const server = http.createServer((req, res) => {

  // Headers CORS : autorise les requêtes depuis React (localhost:5173)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json");

  // Réponse aux requêtes OPTIONS (pré-vol CORS)
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // Route principale : POST /generate
  if (req.method === "POST" && req.url === "/generate") {
    let body = "";

    // Lecture du body de la requête
    req.on("data", (chunk) => { body += chunk.toString(); });

    req.on("end", () => {
      try {
        const { keywords } = JSON.parse(body || "{}");
        const ideas = generateIdeas(keywords);

        // Simulation d'un délai réseau (500ms)
        setTimeout(() => {
          res.writeHead(200);
          res.end(JSON.stringify({ ideas }));
          console.log(`[${new Date().toLocaleTimeString()}] POST /generate — keywords: "${keywords}" → ${ideas.length} idées envoyées`);
        }, 500);

      } catch (err) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: "JSON invalide dans le body" }));
      }
    });
    return;
  }

  // Route de test : GET /
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200);
    res.end(JSON.stringify({ status: "SmartIdea API en ligne ✅", endpoint: "POST /generate" }));
    return;
  }

  // Route non trouvée
  res.writeHead(404);
  res.end(JSON.stringify({ error: "Route non trouvée" }));
});

server.listen(PORT, () => {
  console.log(`🚀 Serveur SmartIdea démarré sur http://localhost:${PORT}`);
  console.log(`   Endpoint disponible : POST http://localhost:${PORT}/generate`);
});
