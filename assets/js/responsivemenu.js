$('.navigation-menu--responsive a').click(function() {
    $('.navigation-menu--responsive a span').removeClass('active');
    $(this).find('span').addClass('active');
});


// Go to presentation
$('#mobile-pres').click(function() {
    $('html, body').animate({
        scrollTop: $("#presentation").offset().top
    }, 1000);
});

// Go to comp
$('#mobile-comp').click(function() {
    $('html, body').animate({
        scrollTop: $("#competences").offset().top
    }, 1000);
});

// Go to portfolio
$('#mobile-portfolio').click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
});

// Go to xp
$('#mobile-xp').click(function() {

});

// Go to refs
$('#mobile-refs').click(function() {
    
});

// Go to contact
$('#mobile-contact').click(function() {

});
