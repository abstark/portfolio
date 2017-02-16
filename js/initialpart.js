  $(document).ready(function()
  {
  window.sr = ScrollReveal( {reset: true });
  sr.reveal('#about', { duration: 1000,delay: 800});
  sr.reveal('.d', { duration: 1000,delay: 800});
  $('.parallax').parallax();
  
  $("#navbar").sticky({topSpacing:0});


});
  