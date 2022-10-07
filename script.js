let menu = document.querySelector("#menu");
let menuMob = document.querySelector(".mob-menu");

menu.addEventListener('click', () => {
    menuMob.classList.toggle('active');
})