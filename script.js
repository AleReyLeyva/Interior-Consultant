const headerMenu = document.querySelector('.header__menu');
const burguerMenu = document.querySelector('.header__menu-burguer');
const crossMenu = document.querySelector('.header__menu-cross');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const header = document.querySelector('header');
const headerTitle = document.querySelector('.header__title');
const headerNav = document.querySelector('nav');
const headerLink = document.querySelectorAll('li');

headerMenu.addEventListener('click', () => {
  crossMenu.classList.toggle('hidden');
  burguerMenu.classList.toggle('hidden');
  main.classList.toggle('hidden');
  footer.classList.toggle('hidden');
  headerTitle.classList.toggle('hidden');
  header.classList.toggle('header--cross-mode');
  headerMenu.classList.toggle('header__menu--cross-mode');
  headerNav.classList.toggle('nav--cross-mode');
  headerLink.forEach((link) => link.classList.toggle('link--cross-mode'));
});
