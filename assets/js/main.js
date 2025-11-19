// On attend que la page soit chargée
document.addEventListener('DOMContentLoaded', () => {

    // 1. Récupérer les éléments
    const modal = document.getElementById("modal-cv");
    const btn = document.getElementById("btn-cv");
    const span = document.getElementsByClassName("close-modal")[0];

    // 2. Quand on clique sur "Voir mon CV", on ouvre la modale
    btn.onclick = function() {
        modal.style.display = "block";
        // Empêche le scroll de la page derrière
        document.body.style.overflow = "hidden";
    }

    // 3. Quand on clique sur la croix (X), on ferme
    span.onclick = function() {
        modal.style.display = "none";
        // Réactive le scroll
        document.body.style.overflow = "auto";
    }

    // 4. Quand on clique n'importe où en dehors de la fenêtre (sur le fond noir), on ferme aussi
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
});