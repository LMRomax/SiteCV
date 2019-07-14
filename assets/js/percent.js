var $presentation = $('#presentation');
var $competences = $('#competences');
var $projets = $('#projets');
var $experiences = $('#experiences');
var $formations = $('#formations');
var $references = $('#references');
var $contact = $('#contact');

$presentation.waypoint(function(direction){
  console.log('Waypoint!');
  if(direction=='down'){
    $(".navigation-bar").addClass('animate');
    $('#element-pres').addClass('current');
    $('#element-comp').removeClass('current');
    $('#element-projets').removeClass('current');
    $('#element-exp').removeClass('current');
    $('#element-ref').removeClass('current');
    $('#element-contact').removeClass('current');
  }
  else if(direction=='up'){
    $(".navigation-bar").removeClass('animate');
    $('#element-pres').removeClass('current');
  }
},{offset:'10%'});

$competences.waypoint(function(direction){
  console.log('Waypoint!');
  if(direction=='down'){
    $(".section-comp").addClass('animated');
    $(".progress-bar").addClass('animated');
    $( ".bar-fill" ).each(function() {
      var $datawidth = $(this).attr('data-width');
      console.log($datawidth);
      $(this).css('width', $datawidth);
   });
    $('#element-comp').addClass('current');
    $('#element-pres').removeClass('current');
    $('#element-projets').removeClass('current');
    $('#element-exp').removeClass('current');
    $('#element-ref').removeClass('current');
    $('#element-contact').removeClass('current');
  }
  else if(direction=='up'){
    $('#element-pres').addClass('current');
    $('#element-comp').removeClass('current');
  }
},{offset:'50%'});

$projets.waypoint(function(direction){
  console.log('Waypoint!');
  if(direction=='down'){
    $(".section-projets").addClass('animated');
    $('#element-projets').addClass('current');
    $('#element-comp').removeClass('current');
    $('#element-pres').removeClass('current');
    $('#element-exp').removeClass('current');
    $('#element-ref').removeClass('current');
    $('#element-contact').removeClass('current');

  }
  else if(direction=='up'){
    $('#element-comp').addClass('current');
    $('#element-projets').removeClass('current');
  }
},{offset:'65%'});

$experiences.waypoint(function(direction){
  console.log('Waypoint!');
  if(direction=='down'){
    $(".section-exp").addClass('animated');
    $(".timeline-box-inner").addClass('animated');
    $(".timeline-box-inner").addClass('animated');
    $('#element-exp').addClass('current');
    $('#element-projets').removeClass('current');
    $('#element-comp').removeClass('current');
    $('#element-pres').removeClass('current');
    $('#element-ref').removeClass('current');
    $('#element-contact').removeClass('current');
  }
  else if(direction=='up'){
    $('#element-projets').addClass('current');
    $('#element-exp').removeClass('current');
  }
},{offset:'65%'});

$formations.waypoint(function(direction){
  console.log('Waypoint!');
  if(direction=='down'){
    $(".section-formations").addClass('animated');
    $(".timeline-box-innerform").addClass('animated');
    $(".timeline-box-innerform").addClass('animated');
  }
},{offset:'65%'});

$references.waypoint(function(direction){
  console.log('Waypoint!');
  if(direction=='down'){
    $(".section-ref").addClass('animated');
    $('#element-ref').addClass('current');
    $('#element-exp').removeClass('current');
    $('#element-projets').removeClass('current');
    $('#element-comp').removeClass('current');
    $('#element-pres').removeClass('current');
    $('#element-contact').removeClass('current');
  }
  else if(direction=='up'){
    $('#element-exp').addClass('current');
    $('#element-ref').removeClass('current');
  }
},{offset:'75%'});

$contact.waypoint(function(direction){
  console.log('Waypoint!');
  if(direction=='down'){
    $(".section-contact").addClass('animated');
    $('#element-contact').addClass('current');
    $('#element-ref').removeClass('current');
    $('#element-exp').removeClass('current');
    $('#element-projets').removeClass('current');
    $('#element-comp').removeClass('current');
    $('#element-pres').removeClass('current');
  }
  else if(direction=='up'){
    $('#element-ref').addClass('current');
    $('#element-contact').removeClass('current');
  }
},{offset:'50%'});
