const openMenu = () => {
    const menu = document.querySelector(".header-menu");
    //console.log(menu)

    menu.classList.toggle("active");   //Toogle pour pouvoir effacer le menu quand on veut sortir
    
    if (menu.classList.contains("active")) {
        document.querySelector("header .material-symbols-outlined").innerHTML = "close"
    } 
    else {
        document.querySelector("header .material-symbols-outlined").innerHTML = "menu"    
    }
};

// Écouteurs d'événements pour chaque lien du menu
document.querySelectorAll(".header-menu a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        
        const targetId = link.getAttribute("href").substring(1); // Récupère l'ID de la section cible
        const targetElement = document.getElementById(targetId); // Obtient l'élément de la section cible
        
        if (targetElement) {
            // Calcule la position de défilement en tenant compte de la hauteur de l'en-tête
            const offsetPosition = targetElement.offsetTop - document.querySelector("header").offsetHeight + 20;
            
            // Défilement en douceur vers la section cible
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            
            // Ferme le menu mobile
            const menu = document.querySelector(".header-menu");
            menu.classList.remove("active");
            document.querySelector(".header-menu-mobile .material-symbols-outlined").innerHTML = "menu";
        }
    });
});