
// EXERCISE 16
// Please, read the exercise-info/flat.md to get the initial data of what is the expected result of this exercise.
// Array example: flatArraysData in /data/data.js
// flatArrays([['d', 'r'], 'z', 'b', ['f', 'y']]) => ['d', 'r', 'z', 'b', 'f', 'y']
// NOTE: You can NOT use the array.flat() method in your code

export function flatArrays(array) {
  // Your code goes here...
  //empty array to hold copy of arrays
  const flattened = [];
  //iterate through each element of the array
  for(let elements of array) {
  //check if the current element is an array or not
  if(!array.isArray(elements)){
    //if the element is not an array push the element to the array
    flattened.push(elements);
  } else {
    //if the elements is an array iterate through array and push elements to empty array
      for(let element of elements) {
        flattened.push(element);
      }
    }
  }
  return flattened; 
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
