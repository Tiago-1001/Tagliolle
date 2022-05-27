function whats(){
  window.open(`https://web.whatsapp.com/send?phone=5511948559045`, '_blank')
}

let btnMobile = document.querySelector('.btn-mobile');

const nav = document.getElementById('nav');

function toggleMenu(e) {
  if (e.type === 'touchstart') {
    e.preventDefault()
  };

  nav.classList.toggle('active');
}

function closeHamburguer() {
  if (window.screen.width < 768) {
    nav.classList.toggle('active');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



// CÓDIGO DO SLIDER
$(document).ready(function() {
  $('.autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
        $('.autoWidth').removeClass('cS-hidden');
      }
  });  
});

