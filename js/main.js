/* js/main.js */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema inicializado: Portafolio de Matías Cufre cargado.");

    const btnDarkMode = document.getElementById('btn-dark-mode');
    const icon = btnDarkMode.querySelector('i');
    const htmlElement = document.documentElement;

    // 1. Revisar si el usuario ya tenía el modo oscuro activado
    if (localStorage.getItem('theme') === 'dark') {
        htmlElement.classList.add('dark-theme');
        icon.className = 'fa-regular fa-sun text-lg'; 
    }

    // 2. Lógica al hacer clic en el botón
    if (btnDarkMode) {
        btnDarkMode.addEventListener('click', () => {
            htmlElement.classList.toggle('dark-theme');

            if (htmlElement.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
                // Cambiar al sol
                icon.className = 'fa-regular fa-sun text-lg';
            } else {
                localStorage.setItem('theme', 'light');
                // Volver a la luna
                icon.className = 'fa-regular fa-moon text-lg';
            }
        });
    }
});