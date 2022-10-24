/* exported isUpperCased */
function isUpperCased(word) {
  if (word.toUpperCase() === word) {
    return true;
  } else {
    return false;
  }
}

// used an if statement to get the boolean value
// the condition states that if the string that is passed is all uppercase return it as true,
// if not return as false
