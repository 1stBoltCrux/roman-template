import { convertRoman } from './roman.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// User Logic
$(document).ready(function(){
  $("#user-input-form").submit(function(event) {
    event.preventDefault();
    // Take userInput string, convert to array and reverse
    var userInput = $("#user-input").val();
    var numbersArray = userInput.split("").reverse();
    // Calls convertRoman function and passes numbersArray as argument
    $("#output").empty().append(convertRoman(numbersArray));
  });
});
