// dark mode

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


// affichage image en grand 

document.querySelectorAll('img').forEach(img => {
    
    img.addEventListener('click', () => {

        const fullscreenDiv = document.createElement('div');
        fullscreenDiv.style.position = 'fixed';
        fullscreenDiv.style.top = '0';
        fullscreenDiv.style.left = '0';
        fullscreenDiv.style.width = '100%';
        fullscreenDiv.style.height = '100%';
        fullscreenDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        fullscreenDiv.style.display = 'flex';
        fullscreenDiv.style.justifyContent = 'center';
        fullscreenDiv.style.alignItems = 'center';


    
        const fullscreenImg = img.cloneNode();
        fullscreenImg.style.maxWidth = '90%';
        fullscreenImg.style.maxHeight = '90%';


        fullscreenDiv.appendChild(fullscreenImg);


        document.body.appendChild(fullscreenDiv);

        fullscreenDiv.addEventListener('click', () => {
            document.body.removeChild(fullscreenDiv);
        });
    });
});
