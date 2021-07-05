window.onscroll = function () { myFunction(); };

const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

menubtn = document.querySelector('.dropbtn');

// ham click
menubtn.addEventListener('click', () => {
  document.querySelector('.dropdown-content').classList.toggle('mnlist1');
  document.querySelector('.pageOverlay').classList.toggle('pageOverlayActive');
  document.querySelector('.scroll').classList.toggle('disableScroll');
  document.querySelector('.Menu-Search').classList.remove('search-active');
  document.querySelector('.pageOverlay3').classList.remove('pageOverlay3Active');
});

closemenubtn = document.querySelector('.header-btn');

closemenubtn.addEventListener('click', () => {
  document.querySelector('.dropdown-content').classList.remove('mnlist1');
  document.querySelector('.pageOverlay').classList.remove('pageOverlayActive');
  document.querySelector('.scroll').classList.remove('disableScroll');
});

closemenubtn2 = document.querySelector('.pageOverlay');

closemenubtn2.addEventListener('click', () => {
  document.querySelector('.dropdown-content').classList.remove('mnlist1');
  document.querySelector('.pageOverlay').classList.remove('pageOverlayActive');
  document.querySelector('.scroll').classList.remove('disableScroll');
  document.querySelector('.cash-option-box2').classList.remove('cash-option-box-active2');
  document.querySelector('.size-box').classList.remove('size-box-active');
});

closemenubtn22 = document.querySelector('.pageOverlay2');

closemenubtn22.addEventListener('click', () => {
  document.querySelector('.dropdown-content').classList.remove('mnlist1');
  document.querySelector('.pageOverlay2').classList.remove('pageOverlay2Active');
  document.querySelector('.scroll').classList.remove('disableScroll');
  document.querySelector('.cash-option-box2').classList.remove('cash-option-box-active2');
  document.querySelector('.cash-option-box').classList.remove('cash-option-box-active');
  document.querySelector('.size-box').classList.remove('size-box-active');
});

extendbtn = document.querySelector('.extendmenu');
extendsList = document.querySelector('.extend-items');

// ham click
extendbtn.addEventListener('click', () => {
  const nestedMenuHeight = extendsList.scrollHeight;
  extendsList.style.setProperty('--nested-menu-height', `${nestedMenuHeight}px`);
  extendsList.classList.toggle('extend-items-active');
});

cashbtn = document.querySelector('.cash-btn');
cashbtn.addEventListener('click', () => {
  document.querySelector('.cash-option-box').classList.toggle('cash-option-box-active');
  document.querySelector('.scroll').classList.toggle('disableScroll');
  document.querySelector('.pageOverlay2').classList.toggle('pageOverlay2Active');
});

cashbtn2 = document.querySelector('.cash-option-btn');
cashbtn2.addEventListener('click', () => {
  document.querySelector('.cash-option-box2').classList.toggle('cash-option-box-active2');
  document.querySelector('.scroll').classList.toggle('disableScroll');
  
  let width = $(window).width();
  if (width < 1024){
    document.querySelector('.pageOverlay2').classList.remove('pageOverlay2Active');
    document.querySelector('.pageOverlay').classList.toggle('pageOverlayActive');
  } else {
    document.querySelector('.pageOverlay').classList.remove('pageOverlayActive');
    document.querySelector('.pageOverlay2').classList.toggle('pageOverlay2Active');
  };
});

closemenubtn2 = document.querySelector('.header-btn2');

closemenubtn2.addEventListener('click', () => {
  document.querySelector('.cash-option-box2').classList.remove('cash-option-box-active2');
  document.querySelector('.scroll').classList.remove('disableScroll');
  document.querySelector('.pageOverlay').classList.remove('pageOverlayActive');
});

searchbtn = document.querySelector('.search-btn');
searchbtn.addEventListener('click', () => {
  document.querySelector('.Menu-Search').classList.toggle('search-active');
  document.querySelector('.scroll').classList.toggle('disableScroll');
  document.querySelector('.pageOverlay3').classList.toggle('pageOverlay3Active');
});

searchbtn2 = document.querySelector('.itemsearch');
searchbtn2.addEventListener('click', () => {
  document.querySelector('.Menu-Search').classList.toggle('search-active');
  document.querySelector('.scroll').classList.toggle('disableScroll');
  document.querySelector('.pageOverlay3').classList.toggle('pageOverlay3Active');
});

closesearchbtn = document.querySelector('.close-btn');

closesearchbtn.addEventListener('click', () => {
  document.querySelector('.Menu-Search').classList.remove('search-active');
  document.querySelector('.scroll').classList.remove('disableScroll');
  document.querySelector('.pageOverlay3').classList.remove('pageOverlay3Active');
});