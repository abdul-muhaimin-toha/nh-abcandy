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

// /////////////////////////////////
// Slider Functionality
// /////////////////////////////////

$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    customPaging: function () {
      return '<div class="custom-pagination"></div>';
    },
  });
});

$(document).ready(function () {
  $('.blog-carousal__slider').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    customPaging: function () {
      return '<div class="custom-pagination-2"></div>';
    },
  });
});
