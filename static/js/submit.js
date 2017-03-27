$(document).ready(function() {
  var $emailForm = $(".email-contact-form");

  $emailForm.on('submit', function(evt) {
    evt.preventDefault();

    var data = {
      email: $emailForm.find('.email-input').val(),
      message: $emailForm.find('.message-input').val()
    };
    $.post('/email', data, function(res) {
      var response = JSON.parse(res);
      var message;
      if (response.success) {
        message = "Thank you for contacting me!";
        $emailForm.find('.form-control').val('');
      } else {
        message = "There was an error sending your email, please try again.";
      }
      bootbox.alert({
        message: message,
        size: 'small',
        backdrop: true,
        buttons: {
          ok: {
            label: 'Ok',
            className: 'btn-success'
          },
        }
      });
    });
  });

  $("#contact-form-box").keypress(function(event){
    if (event.which == 13) {
      $("#enter-submit").click();
    }
  });
});