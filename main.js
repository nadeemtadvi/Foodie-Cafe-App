const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: false,
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1100: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    890: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    468: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
  },
});
