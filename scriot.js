document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.Bio, .Disco, .Contact, .gallery');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        observer.observe(el);
    });
});

// animation affichache section au defilement

