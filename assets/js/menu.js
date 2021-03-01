$('.navigation-menu a').click(function() {
    $('.navigation-menu a span').removeClass('active');
    $(this).find('span').addClass('active');
});