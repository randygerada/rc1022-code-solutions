/* exported lastChars */

function lastChars(length, string) {
  var emptyString = '';
  if (string === '') {
    return '';
  } else if (length > string.length) {
    return string;
  }

  emptyString = string.slice(-length);
  return emptyString;
}

// used slice method to gain the last characters of the string.
// used negative value of the length.
