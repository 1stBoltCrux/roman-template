// Business Logic
function convertRoman(array) {
  var onesArray = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  var tensArray = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  var hundredsArray = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  var thousandsArray = ['M', 'MM', 'MMM'];

  array[0] = onesArray[(parseInt(array[0])-1)];
  array[1] = tensArray[(parseInt(array[1])-1)];
  array[2] = hundredsArray[(parseInt(array[2])-1)];
  array[3] = thousandsArray[(parseInt(array[3])-1)];

  return array.reverse();

}

// User Logic
$(document).ready(function(){
  $("#user-input-form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#user-input").val();
    var numbersArray = userInput.split("").reverse();

    $("#output").empty().append(convertRoman(numbersArray));
  });
});
