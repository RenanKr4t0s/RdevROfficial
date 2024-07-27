const navburguer = document.getElementById('navburguer')
const list = document.querySelector('[data-list]');


function openHamburguer(){
  navburguer.classList.toggle("hider");
  list.classList.toggle('list-hider');
}

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const carouselContent = document.querySelector(".carousel-content");
  const icons = carouselContent.innerHTML;
  carouselContent.innerHTML += icons + icons;
});
