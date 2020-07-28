let typed = new Typed('#typed', {
  strings: ['apps.', 'websites.', 'softwares.'],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  dots: true,
  nav: true,
  navText: [
    "<i class='fas fa-arrow-left'></i>",
    "<i class='fas fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

window.addEventListener('scroll', function () {
  let header = document.querySelector('#nav');
  const logo = document.getElementById('logo');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
  if (windowPosition) {
    logo.src = 'images/logo-dark.png';
  } else {
    logo.src = 'images/logo-light.png';
  }
});
