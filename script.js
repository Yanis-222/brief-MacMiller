
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Vérifie le mode actuel 
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    toggleButton.textContent = 'Mode Sombre';
}

// changement du thème
toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = '🌙';
    } else {
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = '☀︎';
    }
});