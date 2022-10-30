/* exported firstChars */

/* function is asking for to parameters, a number and a string.
    the number provided will give us the number of characters
    that the function will reproduce. */

function firstChars(length, string) {
  var emptyString = '';
  if (string === '') {
    return '';
  } else if (length > string.length) {
    return string;
  }

  emptyString = string.slice(0, length);
  return emptyString;
}

// used slice method in order to get the amount of characters based on what the value of length is
/* used two conditional statements to check for if there is an empty string
   or if the value of length is greater than the actual string. */
