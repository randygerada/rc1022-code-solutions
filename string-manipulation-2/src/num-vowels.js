/* exported numVowels */

// need an if statement for if a empty string is passed return 0;
// use a toLowerCase to make string lower ASCII
// make a for loop to loop through string

function numVowels(string) {
  const lowerCaseString = string.toLowerCase();
  if (lowerCaseString === '') {
    return 0;
  }
  var vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (const char of lowerCaseString) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

// used an array and a for of loop in order to loop through each letter of the string
// used vowelsCount in order to count the amount of vowels that the for of loop will loops through
