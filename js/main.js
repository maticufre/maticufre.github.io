/* js/main.js */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema inicializado: Portafolio de Matías Cufre cargado.");

    // --- MODO OSCURO (Preparación) ---
    const btnDarkMode = document.getElementById('btn-dark-mode');
    if (btnDarkMode) {
        btnDarkMode.addEventListener('click', () => {
            console.log("Próximamente: Lógica de Modo Oscuro");
            // Aquí agregaremos la clase 'dark' al HTML
        });
    }

    // --- TRADUCCIÓN (Preparación) ---
    const btnLang = document.getElementById('btn-language');
    if (btnLang) {
        btnLang.addEventListener('click', () => {
            console.log("Próximamente: Lógica de Traducción a Inglés");
        });
    }
});