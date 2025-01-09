// script.js
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.scroll-container img');

    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.filter = 'blur(20px)'; // Difuminado más fuerte
        });

        img.addEventListener('mouseleave', () => {
            img.style.filter = 'none';
        });
    });
});


// script.js

// Seleccionamos el contenedor de las imágenes
const scrollContainer = document.querySelector('.scroll-container');
const scrollImages = document.querySelector('.scroll-images');

// Variable para rastrear la posición actual
let currentScrollPosition = 0;

// Evento para capturar el desplazamiento de la rueda del ratón
scrollContainer.addEventListener('wheel', (event) => {
    event.preventDefault(); // Evitamos el scroll vertical predeterminado

    // Actualizamos la posición actual según el desplazamiento de la rueda
    currentScrollPosition += event.deltaY;

    // Mantenemos el rango del scroll dentro de los límites
    const maxScroll = scrollImages.offsetWidth - scrollContainer.offsetWidth;
    if (currentScrollPosition < 0) currentScrollPosition = 0; // No permite mover más allá del inicio
    if (currentScrollPosition > maxScroll) currentScrollPosition = maxScroll; // No permite mover más allá del final

    // Movemos las imágenes
    scrollImages.style.transform = `translateX(-${currentScrollPosition}px)`;
});
