$(function(){
  $("#modals").load("modals.html");
});

$(document).ready(function() {

// When the user clicks on the button, open the modal
  $('#helpBtn').click(function () {
    $('#helpModal').css('display', 'block');

    ga('send', {
      hitType: 'event',
      eventCategory: 'Button',
      eventAction: 'click',
      eventLabel: 'Clicked Help'
    });

    // When the user clicks on <span> (x), close the modal
    $('#helpModal').find("span").click(function () {
      $('#helpModal').css('display', 'none');
    });

// When the user clicks anywhere outside of the modal, close it
      $(window).click(function (event) {
        if (event.target.id == 'helpModal') {
          $('#helpModal').css('display', 'none');
        }
      });
  })
});
