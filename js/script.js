// /////////////////////////////////
// Selecting Elements
// /////////////////////////////////

const mobileNavOpenerBtn = document.querySelector('#mobile-nav-opener-btn');
const mobileNavCloseBtn = document.querySelector('#mobile-nav-close-btn');
const mainNav = document.querySelector('.navigation');
const mobileNav = document.querySelector('.mobile-navigation');
const loadMoreBtn = document.querySelector('#load-more');
const blogContainer = document.querySelector('.blog__container');

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

loadMoreBtn.addEventListener('click', function () {
  const newBlogCard = `
    <div class="blog-carousal blog-simple">
      <div class="blog-carousal__slider">
        <img src="img/blogs/blog-3.jpg" alt="Blog image" />
      </div>
      <div class="blog-carousal__content blog-video__content">
        <div class="blog-carousal__details">
          <p class="blog-carousal__category">Design & Creative</p>
          <p class="blog-carousal__date">10 June 2023</p>
        </div>
        <h2 class="blog-carousal__heading">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <p class="blog-carousal__description">
          Lorem ipsum dolor sit amet consectetur. Et bibendum nunc in
          amet auctor enim massa. Leo purus amet sem libero quisque.
        </p>
        <p>By <span class="blog-carousal__author">Jon Doe</span></p>
      </div>
    </div>
  `;

  // Append the new blog card to the container
  for (let i = 0; i < 3; i++) {
    blogContainer.insertAdjacentHTML('beforeend', newBlogCard);
    loadMoreBtn.style.display = 'none';
  }
});
