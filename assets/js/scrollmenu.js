var $balise = $('.balise');

$balise.waypoint(function(direction){
  console.log('Waypoint!');
  if(direction=='down'){
    $(".topnav").addClass('animate');
  }
  else if(direction=='up'){
    $(".topnav").removeClass('animate');
  }
},{offset:'-15%'});
