const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const homebtn = document.querySelector('.homebtn');
const aboutbtn = document.querySelector('.aboutbtn');
const projectsbtn = document.querySelector('.projectsbtn');
const contactbtn = document.querySelector('.contactbtn');


if (window.matchMedia("(max-width:900px)").matches) {



  homebtn.addEventListener('click', hidemenu)
  aboutbtn.addEventListener('click', hidemenu)
  projectsbtn.addEventListener('click', hidemenu)
  contactbtn.addEventListener('click', hidemenu)
  openMenu.addEventListener('click', show);
  closeMenu.addEventListener('click', hide);

  function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    openMenu.style.display = 'none';
  }

  function hide() {
    mainMenu.style.top = '-100%';
    openMenu.style.display = 'block';
  }

  function hidemenu() {
    mainMenu.style.top = '-100%';
    openMenu.style.display = 'block';
  }
}

// Typed JS Animation Start

var typed = new Typed('.type', {
  strings: [
    'Mathematicaphile',
    'Web Developer',
    'Programmer'
  ],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1500,
  loop: true
});
// Typed JS Animation End

//------------NAVBAR BG CHANGE ON SCROLL START-----------------

// window.addEventListener('scroll', function () {
//     let navbar = this.document.querySelector('header');
//     let windowPosition = window.scrollY > 80;
//     if (windowPosition) {
//         navbar.classList.add('scroll-active');
//     } else {
//         navbar.classList.remove('scroll-active');
//     }
// });

//------------NAVBAR BG CHANGE ON SCROLL END-----------------

// homebtn.addEventListener('mouseover', homebeforeeffect)
// aboutbtn.addEventListener('mouseover', aboutbeforeeffect)
// projectsbtn.addEventListener('mouseover', projectsbeforeeffect)
// contactbtn.addEventListener('mouseover', contactbeforeeffect)


$(document).ready(function () {
  $(".homebtn").hover(
    function () {
      $(this).addClass("active");
    },
    function () {
      $(this).removeClass("active");
    }
  );
});
// function homebeforeeffect() {
//     if (!(homebtn.classList.contains('active'))) {
//         homebtn.classList.add('active');
//     }
//     else {
//         homebtn.classList.remove('active');
//     }
// }
// function aboutbeforeeffect() {
//     if (!(aboutbtn.classList.contains('active'))) {
//         aboutbtn.classList.add('active');
//     }
//     else {
//         aboutbtn.classList.remove('active');
//     }
// }
// function projectsbeforeeffect() {
//     if (!(projectsbtn.classList.contains('active'))) {
//         projectsbtn.classList.add('active');
//     }
//     else {
//         projectsbtn.classList.remove('active');
//     }
//     projectsbtn.classList.remove('active');
// }
// function contactbeforeeffect() {
//     if (!(contactbtn.classList.contains('active'))) {
//         contactbtn.classList.add('active');
//     }
//     else {
//         contactbtn.classList.remove('active');
//     }
// }