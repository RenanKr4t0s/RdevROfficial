let navburguer = document.getElementById('navburguer')
let list = document.querySelector('[data-list]');

function openHamburguer(){
  navburguer.classList.toggle("hider");
  list.classList.toggle('list-hider');
}