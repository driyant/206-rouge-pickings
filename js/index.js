const menuBtn = document.querySelector(".menu");
const navbar = document.querySelector("nav");


menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    navbar.classList.toggle("open");
});