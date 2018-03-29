// Business Logic

// User Logic
$(document).ready(function(){
  $("#user-input-form").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#user-input").val());

    $("#output").append(userInput);
  });
});
