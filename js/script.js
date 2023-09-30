$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $('.header-sticky').addClass('sticky');
  } else {
    $('.header-sticky').removeClass('sticky');
  }
});

var swiper = new Swiper(".slider .mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

var swiper = new Swiper(".content1 .mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

var swiper = new Swiper(".content2 .mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

var swiper = new Swiper(".news__sec-content .mySwiper", {
  slidesPerView: 2,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.3,
    },
    670: {
      slidesPerView: 2.5,
    },
    970: {
      slidesPerView: 2,
    }
  }
});

function toggle_disabled() {
  document.getElementById('email_relatie').disabled = !document.getElementById('email_user').checked;
}

const trainers = document.querySelectorAll('.trainer-choose .row .col-2'),
  banner = document.querySelectorAll('.tariner-mob .trainer-content');

trainers.forEach(trainer1 => {
  
  trainer1.addEventListener('click', () => {
    const target = document.querySelector(trainer1.dataset.tabTarget)

    trainers.forEach(trainer1 => {
      trainer1.classList.remove('active');
    })

    banner.forEach(bannerItem => {
      bannerItem.classList.remove('active');
    })

    trainer1.classList.add('active')
    target.classList.add('active')
  })
});