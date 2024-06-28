const openMenu = () => {
    const menu = document.querySelector(".header-menu");
    //console.log(menu)

    //menu.style.display = "flex"

    menu.classList.toggle("active");   //Toogle pour pouvoir effacer le menu quand on veut sortir
    
    if (menu.classList.contains("active")) {
        document.querySelector("header .material-symbols-outlined").innerHTML = "close"
    } 
    else {
        document.querySelector("header .material-symbols-outlined").innerHTML = "menu"    
    }

}