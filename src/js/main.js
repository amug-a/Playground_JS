const myBtn = document.querySelector('.btn');
const myBody = document.querySelector('body');
const myNavbar = document.getElementById('navbar');
console.log(myNavbar);
const links = myNavbar.getElementsByTagName('a');
console.log(links);
const menu = document.querySelectorAll('.bars');
console.log(menu);

function clickMe() {
  function random() {
    return Math.floor(Math.random() * 256);
  }
  myBtn.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
  myBody.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
  myNavbar.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
  let selectColor = `rgb(${random()}, ${random()}, ${random()})`;
  for (let i = 0; i < links.length; i++) {
    links[i].style.color = `rgb(${random()}, ${random()}, ${random()})`;
  }
  for (let i = 0; i < menu.length; i++) {
    menu[i].style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
  }
}