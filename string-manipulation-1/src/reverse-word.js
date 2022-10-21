/* exported reverseWord */

// flipping the word in referse order
// have to decrement in value
// start from last index of the string
// use a for loop for string length

function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}
