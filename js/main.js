/* The redirect to autoplay page function */
function redirect(){
  $('#no-interaction').css("display",'inline-block');
  $('#no-interaction').animate({
    backgroundColor: "#000000",
    opacity: 0.9
  }, 1000 );
}

function removeHelp(){
  $('#no-interaction').animate({
    backgroundColor: "#000000",
    opacity: 0
  }, 500,function(){
    $('#no-interaction').css("display",'none')
  });
}

var initial=setTimeout(redirect,5000);

$(document).click(function(event) {
  clearTimeout( initial );
  removeHelp();
  initial=setTimeout(removeHelp,120000);
});
