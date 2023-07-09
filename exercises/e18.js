// EXERCISE 18
// Please, read the exercise-info/join.md to get the initial data of what is the expected result of this exercise.
// Array example: joinToStringData in /data/data.js
// joinToString(['a', 'b', 'c'], '-') => 'a-b-c'
// NOTE: You can NOT use the array.join(), array.toString(), and array.replace() methods in your code

export function joinToString(array, separator) {
    //string that will be returned
    let joined = ""; 
    //iterate through each element of the array
    for (let element = 0; element < array.length; element++){
    //add each element of array to the string 
        joined += array[element];
    //while iterating through the array, add the seperator after element is added to string
        if(element < array.length-1) {
            joined += separator;
        }
    }
    return joined;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
