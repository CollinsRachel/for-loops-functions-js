
// EXERCISE 19
// Please, read the exercise-info/reverse.md to get the initial data of what is the expected result of this exercise.
// reverseArray([1, 2, 3 ,4]) => [4, 3, 2, 1]
// NOTE: You can NOT use the array.reverse() method in your code

export function reverseArray(array) {
  // Your code goes here...
  //resulting array
  const reversed = [];
  //iterate through the array starting at the last element of the array
  //instead of incrementing through array decrement because we are starting at the end
  // keep decrementing until it gets to array[0]
  for(let i = array.length; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed; 
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-19"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
