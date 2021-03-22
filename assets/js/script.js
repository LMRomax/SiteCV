$(document).ready(function () {
    setTimeout(function () {
        $('#loading').css('display', 'none');
        $('#is-load').css('display', 'block');
        if($(window).width() <= 576) {
            $('.menu--nav').css('display', 'none');
            if ($('.navigation-menu--responsive').hasClass('slick-initialized') == false) {
                $('.navigation-menu--responsive').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerMode: true,
                });
            }
            else {
                $('.navigation-menu--responsive').slick('unslick');
                $('.navigation-menu--responsive').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerMode: true,
                });
            }
            $('.responsive-mobile-nav').css('visibility', 'visible');
        }
        else if ($(window).width() <= 992) {
            $('.menu--nav').css('display', 'none');
            $('.responsive-mobile-nav').css('visibility', 'visible');
            if ($('.navigation-menu--responsive').hasClass('slick-initialized') == false) {
                $('.navigation-menu--responsive').slick({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerMode: true,
                });
            }
            else {
                $('.navigation-menu--responsive').slick('unslick');
                $('.navigation-menu--responsive').slick({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerMode: true,
                });
            }
        }
        else if ($(window).width() > 992) {
            $('.menu--nav').css('display', 'block');
            $('.responsive-mobile-nav').css('visibility', 'hidden');
            if ($('.navigation-menu--responsive').hasClass('slick-initialized') == true) {
                $('.navigation-menu--responsive').slick('unslick');
            }
        }

        $('.refs-carousel-inner').slick({
            infinite: true,
            adaptiveHeight: true
        });
    }, 1000);
});

$(window).resize(function () {
    if($(window).width() <= 576) {
        $('.menu--nav').css('display', 'none');
        if ($('.navigation-menu--responsive').hasClass('slick-initialized') == false) {
            $('.navigation-menu--responsive').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
                centerMode: true,
            });
        }
        else {
            $('.navigation-menu--responsive').slick('unslick');
            $('.navigation-menu--responsive').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
                centerMode: true,
            });
        }
        $('.responsive-mobile-nav').css('visibility', 'visible');
    }
    else if ($(window).width() <= 992) {
        $('.menu--nav').css('display', 'none');
        if ($('.navigation-menu--responsive').hasClass('slick-initialized') == false) {
            $('.navigation-menu--responsive').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
                centerMode: true,
            });
        }
        else {
            $('.navigation-menu--responsive').slick('unslick');
            $('.navigation-menu--responsive').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                variableWidth: false,
                centerMode: true,
            });
        }
        $('.responsive-mobile-nav').css('visibility', 'visible');
    }
    else if ($(window).width() > 992) {
        $('.menu--nav').css('display', 'block');
        $('.responsive-mobile-nav').css('visibility', 'hidden');
        if ($('.navigation-menu--responsive').hasClass('slick-initialized') == true) {
            $('.navigation-menu--responsive').slick('unslick');
        }
    }
});
