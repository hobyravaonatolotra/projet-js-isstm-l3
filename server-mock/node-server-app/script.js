const API_URL = "http://localhost:3000";

        // Fonction pour recuperer une idee
        async function generateIdea() {
            const display = document.getElementById('idea-display');
            display.innerText = "Réflexion de l'IA...";
            
            try {
                const response = await fetch(`${API_URL}/generate`);
                const data = await response.json();
                display.innerText = data.idea;
            } catch (err) {
                display.innerText = "Erreur : le serveur est-il lancé ?";
            }
        }

        // Fonction pour envoyer un nouvelle idee
        async function addIdea() {
            const input = document.getElementById('new-idea-input');
            const idea = input.value;
            if (!idea) return alert("Écris quelque chose !");

            const response = await fetch(`${API_URL}/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ idea: idea })
            });

            if (response.ok) {
                alert("Idée envoyée au serveur !");
                input.value = '';
            }
        }