$('#element-pres').click(function(){
  $('#element-pres').addClass('current');
  $('#element-comp').removeClass('current');
  $('#element-projets').removeClass('current');
  $('#element-exp').removeClass('current');
  $('#element-ref').removeClass('current');
  $('#element-contact').removeClass('current');
});

$('#element-comp').click(function(){
  $('#element-comp').addClass('current');
  $('#element-pres').removeClass('current');
  $('#element-projets').removeClass('current');
  $('#element-exp').removeClass('current');
  $('#element-ref').removeClass('current');
  $('#element-contact').removeClass('current');
});

$('#element-projets').click(function(){
  $('#element-projets').addClass('current');
  $('#element-comp').removeClass('current');
  $('#element-pres').removeClass('current');
  $('#element-exp').removeClass('current');
  $('#element-ref').removeClass('current');
  $('#element-contact').removeClass('current');
});

$('#element-exp').click(function(){
  $('#element-exp').addClass('current');
  $('#element-projets').removeClass('current');
  $('#element-comp').removeClass('current');
  $('#element-pres').removeClass('current');
  $('#element-ref').removeClass('current');
  $('#element-contact').removeClass('current');
});

$('#element-ref').click(function(){
  $('#element-ref').addClass('current');
  $('#element-exp').removeClass('current');
  $('#element-projets').removeClass('current');
  $('#element-comp').removeClass('current');
  $('#element-pres').removeClass('current');
  $('#element-contact').removeClass('current');
});

$('#element-contact').click(function(){
  $('#element-contact').addClass('current');
  $('#element-ref').removeClass('current');
  $('#element-exp').removeClass('current');
  $('#element-projets').removeClass('current');
  $('#element-comp').removeClass('current');
  $('#element-pres').removeClass('current');
});
