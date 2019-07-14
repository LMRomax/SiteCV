$( document ).ready(function() {
  var modal = document.getElementById('obfuscator');

    $('.icon').click(function(){
      $('.responsive-mobile-drawer--west').addClass('is-active');
      $('.responsive-obfuscator').addClass('is-active');
      $('html').css('overflow', 'hidden');
    })

    // When the user clicks on <span> (x), close the modal
    $('.responsive-mobile-close').click(function() {
      $('.responsive-mobile-drawer--west').removeClass('is-active');
      $('.responsive-obfuscator').removeClass('is-active');
      $('html').css('overflow', 'visible');
    })

    // When the user clicks anywhere outside of the modal, close it
    $(window).click(function(event){
      if (event.target == modal) {
          $('.responsive-mobile-drawer--west').removeClass('is-active');
          $('.responsive-obfuscator').removeClass('is-active');
          $('html').css('overflow', 'visible');
        }
    })
});
