document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LÒGICA PER AL MENÚ HAMBURGUESA (MÒBIL) ---
    const menuButton = document.querySelector('.menu-hamburguesa');
    const nav = document.querySelector('header nav');

    if (menuButton && nav) {
        menuButton.addEventListener('click', () => {
            menuButton.classList.toggle('obert');
            nav.classList.toggle('obert');
        });
    }

    // --- 2. LÒGICA PER ANIMACIONS EN FER SCROLL (Estil "Aina") ---
    // Aquesta és una tècnica moderna (Intersection Observer) per detectar
    // quan un element entra a la pantalla.
    
    const elementsToShow = document.querySelectorAll('.fade-in-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: Deixar d'observar un cop s'ha mostrat
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // L'animació comença quan el 10% de l'element és visible
    });

    // Observem cada element que té la classe
    elementsToShow.forEach(el => {
        observer.observe(el);
    });

});