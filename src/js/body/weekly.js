wkbtn = document.querySelector('.wkitem1');
wkbtn.addEventListener('click', () => {
  document.querySelector('.swp5').classList.add('wkdisable');
  document.querySelector('.swp5').classList.remove('wkenable');
  document.querySelector('.swp').classList.remove('wkdisable');
  document.querySelector('.wkitem1').classList.add('option-active');
  document.querySelector('.wkitem2').classList.remove('option-active');
});

wkbtn2 = document.querySelector('.wkitem2');
wkbtn2.addEventListener('click', () => {
  document.querySelector('.swp').classList.add('wkdisable');
  document.querySelector('.swp5').classList.remove('wkdisable');
  document.querySelector('.swp5').classList.add('wkenable');
  document.querySelector('.wkitem2').classList.add('option-active');
  document.querySelector('.wkitem1').classList.remove('option-active');
});