/* exported isVowel */

// to check if the character is a vowel both upper and lower case
// needs an if statement for boolean
// grab all vowels

function isVowel(character) {
  if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
    return true;
  } else if (character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U') {
    return true;
  } else {
    return false;
  }
}
