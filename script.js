const menuToggle = document.querySelector('.menu-toggle');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');

menuToggle.addEventListener('click', () => {
  modal.classList.add('show');
});

closeButton.addEventListener('click', () => {
  modal.classList.remove('show');
});

modal.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    modal.classList.remove('show');
  });
});
