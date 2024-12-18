// Sélectionner le bouton et le body
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Vérifie le mode actuel enregistré dans localStorage
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    toggleButton.textContent = 'Mode Sombre';
}

// Fonction pour basculer le thème
toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = 'Mode Sombre';
    } else {
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = 'Mode Clair';
    }
});