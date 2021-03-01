$(document).ready(function () {
    setTimeout(function () {
        $('#loading').css('display', 'none');
        $('#is-load').css('display', 'block');
        if ($(window).width() <= 768) {
            $('.menu--nav').css('display', 'none');
            $('.responsive-mobile-nav').css('display', 'block');
            if ($('.navigation-menu--responsive').hasClass('slick-initialized') == false) {
                $('.navigation-menu--responsive').slick({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerMode: true,
                    responsive: [
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 450,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        },
                    ]
                });
            }
        }
        else if ($(window).width() > 768) {
            $('.menu--nav').css('display', 'block');
            $('.responsive-mobile-nav').css('display', 'none');
            if ($('.navigation-menu--responsive').hasClass('slick-initialized') == true) {
                $('.navigation-menu--responsive').slick('unslick');
                $('.navigation-menu--responsive').removeClass('slick-initialized');
            }
        }
    }, 1000);
});

$(window).resize(function () {
    if ($(window).width() <= 768) {
        $('.menu--nav').css('display', 'none');
        $('.responsive-mobile-nav').css('display', 'block');
        setTimeout(function () {
            if ($('.navigation-menu--responsive').hasClass('slick-initialized') == false) {
                $('.navigation-menu--responsive').slick({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerMode: true,
                    responsive: [
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 450,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        },
                    ]
                });
            }
        }, 300);
    }
    else if ($(window).width() > 768) {
        $('.menu--nav').css('display', 'block');
        $('.responsive-mobile-nav').css('display', 'none');
        if ($('.navigation-menu--responsive').hasClass('slick-initialized') == true) {
            $('.navigation-menu--responsive').slick('unslick');
            $('.navigation-menu--responsive').removeClass('slick-initialized');
        }
    }
});