// JavaScript code to show/hide mobile menu
const mobileMenu = document.querySelector('.mobile-menu');
const menuToggle = document.querySelector('.menu-toggle');
const closeButton = document.querySelector('.close-button');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('show'); // add class 'show' to display the menu
});

closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('show'); // remove class 'show' to hide the menu
});

// Hide the menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('show'); // remove class 'show' to hide the menu
  });
});
