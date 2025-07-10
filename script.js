// Toggle Menu for Mobile
const menuIcon = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const body = document.body;

menuIcon.addEventListener('click', () => {
  // Toggle the menu's position (slide in/out)
  if (menu.style.left === '0px') {
    menu.style.left = '-250px'; // Hide the menu
    body.classList.remove('menu-open'); // Remove the overlay
  } else {
    menu.style.left = '0px'; // Show the menu
    body.classList.add('menu-open'); // Add the overlay to the body
  }
});
