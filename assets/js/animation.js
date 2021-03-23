$('.button--xp_readmore').click(function() {
    $('.xp-more--toread').addClass('active');
    $('.xp--button__wrapper').css('display', 'none');
    $('.xp--toread .xp-card:last-child .xp-content').css('padding-bottom', '24px');
});

$(window).scroll(function () {
    if ($(window).scrollTop() > $("#ancreCompetences").offset().top - parseInt(400)) {
        $('#competences').addClass('showed');
    }
});

$(window).scroll(function () {
    if ($(window).scrollTop() > $("#ancrePortfolio").offset().top - parseInt(400)) {
        $('#portfolio').addClass('showed');
    }
});

$(window).scroll(function () {
    if ($(window).scrollTop() > $("#ancreXp").offset().top - parseInt(400)) {
        $('#xp').addClass('showed');
    }
});

$(window).scroll(function () {
    if ($(window).scrollTop() > $("#ancreFormations").offset().top - parseInt(400)) {
        $('#formations').addClass('showed');
    }
});

$(window).scroll(function () {
    if ($(window).scrollTop() > $("#ancreRefs").offset().top - parseInt(400)) {
        $('#refs').addClass('showed');
    }
});

$(window).scroll(function () {
    if ($(window).scrollTop() > $("#ancreContact").offset().top - parseInt(400)) {
        $('#contact').addClass('showed');
    }
});