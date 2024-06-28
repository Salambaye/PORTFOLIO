const openMenu = () => {
    const menu = document.querySelector(".header-menu");

    // menu.style.display = "flex"
    // console.log()

    menu.classList.toggle("active");   //Toogle pour pouvoir effacer le menu quand on veut sortir
    console.log("Menu toggled");

    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();

    //         const target = document.querySelector(this.getAttribute('href'));
    //         const headerOffset = document.querySelector('header').offsetHeight;
    //         const elementPosition = target.offsetTop;
    //         const offsetPosition = elementPosition - headerOffset;

    //         window.scrollTo({
    //             top: offsetPosition,
    //             behavior: 'smooth'
    //         });
    //     });
    // });
}