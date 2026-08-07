// ============================================
// BOUTTON HAMBURGER POUR LE MENU DE NAVIGATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navLinks');

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', function() {
            // On bascule la classe 'nav-ouvert' qui fait apparaître le menu en CSS
            navMenu.classList.toggle('nav-ouvert');
        });
    }
});