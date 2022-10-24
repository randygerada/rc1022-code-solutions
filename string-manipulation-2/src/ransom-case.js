/* exported ransomCase */

// function with one parameter value string
// every other letter will be capitalized.
// string.length % 2 === 0
// then capitlize that letter
// possibly use an for loop to go through string?

function ransomCase(string) {
  var emptyString = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] % 2 !== 0) {
      emptyString += string.charAt(i).toUpperCase();
    } else {
      emptyString += string.charAt(i);
    }
  }
  return emptyString;
}
