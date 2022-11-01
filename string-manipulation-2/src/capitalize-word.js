/* exported capitalizeWord */

/* function passing one paramenter which is a string value */
// toUpperCase & toLowerCase methods.

function capitalizeWord(word) {
  var lowerCaseWord = word.toLowerCase();
  if (lowerCaseWord === 'javascript') {
    return 'JavaScript';
  }

  return word.charAt(0).toUpperCase() + lowerCaseWord.slice(1);
}

// pushed everyword to become lowercase then made each letter of the word uppercase.
// sliced the word from the 1 (2nd index) and concatenated it
