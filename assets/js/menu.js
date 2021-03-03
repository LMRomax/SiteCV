$('.navigation-menu a').click(function() {
    $('.navigation-menu a span').removeClass('active');
    $(this).find('span').addClass('active');
});

// Go to presentation
$('#element-pres').click(function() {
    $('html, body').animate({
        scrollTop: $("#presentation").offset().top
    }, 1000);
});

// Go to comp
$('#element-comp').click(function() {
    $('html, body').animate({
        scrollTop: $("#competences").offset().top
    }, 1000);
});

// Go to portfolio
$('#element-portfolio').click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
});

// Go to xp
$('#element-xp').click(function() {

});

// Go to refs
$('#element-refs').click(function() {

});

// Go to contact
$('#element-contact').click(function() {

});