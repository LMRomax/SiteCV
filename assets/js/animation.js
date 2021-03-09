$('.button--xp_readmore').click(function() {
    $('.xp-more--toread').addClass('active');
    $('.xp--button__wrapper').css('display', 'none');
    $('.xp--toread .xp-card:last-child .xp-content').css('padding-bottom', '24px');
});