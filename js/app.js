const openMenu = () => {
    const menu = document.querySelector(".header-menu");

    // menu.style.display = "flex"
    // console.log()

    menu.classList.toggle("active");   //Toogle pour pouvoir effacer le menu quand on veut sortir
    console.log("Menu toggled");
}