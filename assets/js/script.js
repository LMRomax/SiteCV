$(document).ready(function() {
    setTimeout(function(){ 
        $('#loading').css('display', 'none');
        $('#is-load').css('display', 'block');
        if($(window).width() <= 768) {
            $('.menu--nav').css('display', 'none');
            $('.responsive-mobile-nav').css('display', 'block');
            $('.navigation-menu--responsive').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                variableWidth: false,
                centerMode: true,
            });
        }
        else if($(window).width() > 768) {
            $('.menu--nav').css('display', 'block');
            $('.responsive-mobile-nav').css('display', 'none');
        }
    }, 1000);
});

$(window).resize(function() {
    console.log($(window).width());
    if($(window).width() <= 768) {
        $('.menu--nav').css('display', 'none');
        $('.responsive-mobile-nav').css('display', 'block');
        $('.navigation-menu--responsive').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: false,
            centerMode: true,
        });
    }
    else if($(window).width() > 768) {
        $('.menu--nav').css('display', 'block');
        $('.responsive-mobile-nav').css('display', 'none');
    }
});