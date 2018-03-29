// Business Logic
function convertRoman(array) {
  var onesArray = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  var tensArray = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  var hundredsArray = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  var thousandsArray = ['M', 'MM', 'MMM'];

  for (var i = array.length-1; i >= 0; i--) {
    array[array.length-1] = onesArray[parseInt(array[array.length-1])-1];
  }


 return array;
}

// User Logic
$(document).ready(function(){
  $("#user-input-form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#user-input").val();
    var numbersArray = userInput.split("");

    $("#output").empty().append(convertRoman(numbersArray));
  });
});
