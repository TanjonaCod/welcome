window.onload = function() {
    // 1. Sélectionne les éléments
    const loaderWrapper = document.getElementById('loader-wrapper');
    const mainContent = document.getElementById('content');

    // Optionnel : Ajout d'un délai minimum pour que l'utilisateur voie l'animation (ex: 1 seconde)
    setTimeout(function() {
        // 2. Déclenche l'effet de fondu du loader
        loaderWrapper.classList.add('fade-out');

        // 3. Attend que l'animation de fondu soit terminée (0.75s, comme défini dans le CSS)
        // avant de masquer complètement le loader et d'afficher le contenu.
        loaderWrapper.addEventListener('transitionend', function() {
            // Masque complètement le loader
            loaderWrapper.style.display = 'none';

            // Affiche le contenu principal
            mainContent.classList.remove('hidden');
        });
    }, 1000); // 1000 ms = 1 seconde de délai minimum
};