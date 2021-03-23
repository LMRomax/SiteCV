// Position fix menu wehn scroll
$(window).scroll(function () {
    if ($(window).scrollTop() > $(".responsive-mobile-nav").offset().top) {
        $('.responsive-mobile-nav').addClass('menu--fixed');
    }
    else if ($(window).scrollTop() < $(".arrow").offset().top) {
        $('.responsive-mobile-nav').removeClass('menu--fixed');
    }
});

// Animation menu elements
$('.responsive--link-menu').click(function() {
    $('.responsive--link-menu span').removeClass('active');
    $(this).find('span').addClass('active');
});

// Go to presentation
$('#mobile-pres').click(function() {
    $('html, body').animate({
        scrollTop: $("#presentation").offset().top - parseInt(400)
    }, 1000);
});

// Go to comp
$('#mobile-comp').click(function() {
    $('html, body').animate({
        scrollTop: $("#competences").offset().top - parseInt(400)
    }, 1000);
});

// Go to portfolio
$('#mobile-portfolio').click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top - parseInt(400)
    }, 1000);
});

// Go to xp
$('#mobile-xp').click(function() {
    $('html, body').animate({
        scrollTop: $("#xp").offset().top - parseInt(400)
    }, 1000);
});

// Go to formations
$('#mobile-formations').click(function() {
    $('html, body').animate({
        scrollTop: $("#formations").offset().top - parseInt(400)
    }, 1000);
});

// Go to refs
$('#mobile-refs').click(function() {
    $('html, body').animate({
        scrollTop: $("#refs").offset().top - parseInt(400)
    }, 1000);
});

// Go to contact
$('#mobile-contact').click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - parseInt(400)
    }, 1000);
});
