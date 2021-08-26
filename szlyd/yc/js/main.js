let bannerSwiper = new Swiper(".banner-swiper-container", {
  loop: true, // 循环模式选项
  effect: "coverflow",
  speed: 600,
  autoplay: {
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

let marqueeSwiper = new Swiper(".marquee-swiper-container", {
  loop: true, // 循环模式选项
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 1000,
  autoplay: {
    delay: 1,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination2",
  },
});