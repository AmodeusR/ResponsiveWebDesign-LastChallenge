// Dropdown menu for mobile

const $navMenu = document.querySelector(".header__list");
const $hamburgerBtn = document.querySelector(".hamburger-btn");

const $hamburger = document.querySelector(".hamburger").addEventListener("click", () => {
  $hamburgerBtn.classList.toggle("active");
  $navMenu.classList.toggle("show-nav");
});