// Business Logic
export function convertRoman(array) {
  var onesArray = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  var tensArray = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  var hundredsArray = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  var thousandsArray = ['M', 'MM', 'MMM'];
  // Looks up value in array from ones position and replaces it with the corresponding roman numeral array item, ignores 0 and other irrelevant values as there is no corresponding array object
  array[0] = onesArray[(parseInt(array[0])-1)];
  array[1] = tensArray[(parseInt(array[1])-1)];
  array[2] = hundredsArray[(parseInt(array[2])-1)];
  array[3] = thousandsArray[(parseInt(array[3])-1)];

  // Reverse updated array and return
  return array.reverse();
}
