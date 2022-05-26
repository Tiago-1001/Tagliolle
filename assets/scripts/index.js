function whats(){
  window.open(`https://web.whatsapp.com/send?phone=5511948559045`, '_blank')
}


$(document).ready(function() {
  $('.autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('.autoWidth').removeClass('cS-hidden');
      } 
  });  
});

