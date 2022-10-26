/* exported ransomCase */

// function with one parameter value string
// every other letter will be capitalized.
// string.length % 2 === 0
// then capitlize that letter
// possibly use an for loop to go through string?

function ransomCase(string) {
  var lowerCaseString = string.toLowerCase();
  var emptyString = '';
  for (var i = 0; i < lowerCaseString.length; i++) {
    if (i % 2 !== 0) {
      emptyString += lowerCaseString.charAt(i).toUpperCase();
    } else {
      emptyString += lowerCaseString.charAt(i);
    }
  }
  return emptyString;
}
