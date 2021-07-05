colorbtn = document.querySelector('.item1');
colorbtn.addEventListener('click', () => {
  document.querySelector('.image2').classList.add('disable-img');
  document.querySelector('.image2').classList.remove('enable-img');
  document.querySelector('.image1').classList.add('enable-img');
  document.querySelector('.image1').classList.remove('disable-img');
  document.querySelector('.color-name2').classList.add('disablecolorname');
  document.querySelector('.color-name2').classList.remove('enablecolorname');
  document.querySelector('.color-name1').classList.add('enablecolorname');
  document.querySelector('.color-name1').classList.remove('disablecolorname');
  document.querySelector('.textsub').classList.remove('textsub-disable');
});

colorbtn2 = document.querySelector('.item2');
colorbtn2.addEventListener('click', () => {
  document.querySelector('.image1').classList.add('disable-img');
  document.querySelector('.image1').classList.remove('enable-img');
  document.querySelector('.image2').classList.add('enable-img');
  document.querySelector('.image2').classList.remove('disable-img');
  document.querySelector('.color-name1').classList.add('disablecolorname');
  document.querySelector('.color-name1').classList.remove('enablecolorname');
  document.querySelector('.color-name2').classList.add('enablecolorname');
  document.querySelector('.color-name2').classList.remove('disablecolorname');
  document.querySelector('.textsub').classList.add('textsub-disable');
});

sizebtn = document.querySelector('.pick-btn');
sizebtn.addEventListener('click', () => {
  document.querySelector('.size-box').classList.toggle('size-box-active');
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

closesizeboxbtn = document.querySelector('.size-box-header-btn');

closesizeboxbtn.addEventListener('click', () => {
  document.querySelector('.size-box').classList.remove('size-box-active');
  document.querySelector('.scroll').classList.remove('disableScroll');
  document.querySelector('.pageOverlay').classList.remove('pageOverlayActive');
});

sizechartbtn = document.querySelector('.chart-btn');
sizechartbtn.addEventListener('click', () => {
  document.querySelector('.choosebox-sizechart').classList.toggle('sizechart-active');
  document.querySelector('.scroll').classList.toggle('disableScroll');
});

closesizechartbtn = document.querySelector('.closechart-btn');

closesizechartbtn.addEventListener('click', () => {
  document.querySelector('.choosebox-sizechart').classList.remove('sizechart-active');
  document.querySelector('.scroll').classList.remove('disableScroll');
});

activeborder = document.querySelector('.item1');
activeborder.addEventListener('click', () => {
  document.querySelector('.item1').classList.add('active-border');
  document.querySelector('.item2').classList.remove('active-border');
});
activeborder2 = document.querySelector('.item2');
activeborder2.addEventListener('click', () => {
  document.querySelector('.item2').classList.add('active-border');
  document.querySelector('.item1').classList.remove('active-border');
});