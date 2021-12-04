let bar = document.querySelector('.fa-bars')
let navbar = document.querySelector('.navbar')

bar.addEventListener('click', ()=>{
    bar.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})

var swiper = new Swiper(".home-container", {
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    grabCursor: true,
});

var swiper = new Swiper(".review-container", {
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
  },
  loop: true,
  grabCursor: true,
});


