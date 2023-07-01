// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  const validAccount = [];
 
  for(let i = 0; i < array.length; i++) {
    let letterOfName = [];
    let checkLetter = false;
    for (let n in array[i].name) {
      letterOfName.push(array[i].name[n].toLowerCase());
    }
    for(let x = 0; x < letterOfName.length; x++) {
      if(letterOfName[x] === letter.toLowerCase()) {
        let checkLetter = true;
      }
    }
    if(checkLetter) {
      validAccount.push(array[i].name);
    }
  }
  return validAccount;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
