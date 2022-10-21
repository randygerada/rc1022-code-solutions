/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var arr = [];
  var newWord = '';
  for (var i = 0; i < words.length; i++) {
    newWord = words[i] + suffix;
    arr.push(newWord);
  }
  return arr;
}
