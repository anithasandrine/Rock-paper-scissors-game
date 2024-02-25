
// Step 1: Create a variable named input
const input = 'turpentine and turtles';

// Step 2: Create an array named vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Step 3: Create a variable named resultArray
let resultArray = [];

// Step 4: Create a loop to iterate through each letter of the input
for (let i = 0; i < input.length; i++) {
  // Step 5: Log the iterator numbered position inside the for loop
  // console.log('i is ' + i);

  // Step 6: Create a nested loop to iterate through vowels array
  for (let j = 0; j < vowels.length; j++) {
    // Step 7: Log the iterator number positions inside the inner for loop
    // console.log('j is ' + j);

    // Step 8: Compare the input letter to every letter in the vowels array
    if (input[i] === vowels[j]) {
      // Step 9: Add the matched letters to the resultArray
      resultArray.push(input[i]);

      // Step 10: Double the letter 'e'
      if (input[i] === 'e') {
        resultArray.push(input[i]);
      }

      // Step 11: Double the letter 'u'
      if (input[i] === 'u') {
        resultArray.push(input[i]);
      }
    }
  }
}

// Step 12: Log the resultArray to the console
console.log(resultArray);

// Step 13: Join the resultArray into a single string and capitalize all letters
const resultString = resultArray.join('').toUpperCase();

// Step 14: Log the final whale language
console.log(resultString);