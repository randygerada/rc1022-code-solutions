/* exported capitalizeWords */

function capitalizeWords(string) {
  var splitString = string.split(' ');
  var arr = [];
  for (var i = 0; i < splitString.length; i++) {
    var capitalFirstLetter = splitString[i].slice(0, 1).toUpperCase() + splitString[i].slice(1).toLowerCase();
    arr.push(capitalFirstLetter);
  }
  return arr.join(' ');
}
