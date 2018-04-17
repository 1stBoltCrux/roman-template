// Business Logic
export function convertRoman(userInput) {
  debugger;
  var onesArray = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  var tensArray = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  var hundredsArray = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  var thousandsArray = ['M', 'MM', 'MMM'];
  // Looks up value in array from ones position and replaces it with the corresponding roman numeral array item, ignores 0 and other irrelevant values as there is no corresponding array object
  userInput[0] = onesArray[(parseInt(userInput[0])-1)];
  if (userInput.length > 1) {
  userInput[1] = tensArray[(parseInt(userInput[1])-1)];
    if (userInput.length > 2) {
    userInput[2] = hundredsArray[(parseInt(userInput[2])-1)];
      if (userInput.length > 3) {
      userInput[3] = thousandsArray[(parseInt(userInput[3])-1)];
      }
    }
  }
  // Reverse updated array and return
  return userInput.reverse();
}
