/* 
  script.js
  Adds two tiny features:
  1. Smooth scroll when a menu link is clicked.
  2. Current year in the footer so you never update it by hand.
*/

/* 1. Smooth scrolling */
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();                       // stops the instant jump
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' }); // gentle scroll animation
  });
});

/* 2. Insert the current year automatically */
document.getElementById('year').textContent = new Date().getFullYear();
