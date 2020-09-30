'use strict';

const burger = document.querySelector('.burger');
let isMenuOpen = false;

burger.addEventListener('click', handleBurgerClick);

function handleBurgerClick() {
  if (isMenuOpen) {
    burger.classList.remove('open');
    isMenuOpen = false;
  } else {
    burger.classList.add('open');
    isMenuOpen = true;
  }
}
