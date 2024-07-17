// /////////////////////////////////
// Selecting Elements
// /////////////////////////////////

const mobileNavOpen = document.getElementById('mobile-nav-opener');
const mobileNavClose = document.getElementById('mobile-nav-close');
const contactButtons = document.querySelectorAll('.contact-button');
const mobileNav = document.getElementById('mobile-navigation');
const onLoadBlogs = document.querySelectorAll('.blog-onload');
const loadMoreBtn = document.getElementById('load-more');

// /////////////////////////////////
// Navigation Functionality
// /////////////////////////////////

mobileNavOpen.addEventListener('click', function () {
  mobileNav.style.display = 'flex';
});

mobileNavClose.addEventListener('click', function () {
  mobileNav.style.display = 'none';
});

contactButtons.forEach((button) => {
  button.addEventListener('click', function () {
    mobileNav.style.display = 'none';
  });
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
    speed: 900,
    autoplay: true,
    autoplaySpeed: 2000,
    loop: true,
  });
});

$(document).ready(function () {
  $('.blog-carousal__slider').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 1000,
    loop: true,
  });
});

// /////////////////////////////////
// Modal Functionality
// /////////////////////////////////

const myModal = new HystModal({
  linkAttributeName: 'data-hystmodal',
});

// /////////////////////////////////
// Load More Functionality
// /////////////////////////////////

loadMoreBtn.addEventListener('click', function () {
  onLoadBlogs.forEach((blog) => {
    blog.classList.remove('blog-onload');
    loadMoreBtn.style.display = 'none';
  });
});
