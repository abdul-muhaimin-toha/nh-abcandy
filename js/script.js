// /////////////////////////////////
// Selecting Elements
// /////////////////////////////////

const mobileNavOpenerBtn = document.querySelector('#mobile-nav-opener-btn');
const mobileNavCloseBtn = document.querySelector('#mobile-nav-close-btn');
const mainNav = document.querySelector('.navigation');
const mobileNav = document.querySelector('.mobile-navigation');

// /////////////////////////////////
// Navigation Functionality
// /////////////////////////////////
mobileNavOpenerBtn.addEventListener('click', function () {
  mainNav.style.display = 'none';
  mobileNav.style.display = 'flex';
});

mobileNavCloseBtn.addEventListener('click', function () {
  mainNav.style.display = 'flex';
  mobileNav.style.display = 'none';
});
