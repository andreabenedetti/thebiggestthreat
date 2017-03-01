$(document).ready(function() {
    $('#results').hide();
    $('#lightbox').hide();
    
    setTimeout(function() { 
        $('#results').fadeIn(); 
 }, 6000);
    setTimeout(function() { 
        $('#overlay').fadeOut(); 
 }, 9000); 
    
});

$('.detrump').click(function() {
  $('.trump').fadeOut();
});

$('.trumpize').click(function() {
  $('.trump').fadeIn();
});

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 40
        }, 700);
        return false;
      }
    }
  });
});

$('body').scrollspy({ target: '#nav' })

$(function () {
  $('[data-toggle="popover"]').popover()
});