$('.input-field input').focus(function(){
    $(this).parent().addClass('used');
});

$('.input-field input').blur(function(){
    if($(this).val().length > 0) {
        $(this).parent().addClass('used');
    }
    else {
        $(this).parent().removeClass('used');
    }
});
