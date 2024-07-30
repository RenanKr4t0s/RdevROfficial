const navburguer = document.getElementById('navburguer');
const list = document.querySelector('[data-list]');
const saberMais = document.getElementById('scrollButton');

// Barra de Rolagem da Home
document.addEventListener("DOMContentLoaded", () => {
  const carouselContent = document.querySelector(".carousel-content");
  const icons = carouselContent.innerHTML;
  carouselContent.innerHTML += icons + icons;
});

function openHamburguer(){
  navburguer.classList.toggle("hider");
  list.classList.toggle('list-hider');
}

saberMais.addEventListener('click', function() {
  window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
  });
});


