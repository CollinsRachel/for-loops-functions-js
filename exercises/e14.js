
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]


export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const wrongBalances = [];
  //iterate through each account
  for (let account of array) {
    let totalBalance = 0;
    let wdBalance = 0;
    let dpBalance = 0;
    //get wd sums
    for (let wd of account.withdrawals || []) {
      wdBalance += wd; 
    }
    //get dp sums 
    for (let dp of account.deposits || []) {
      dpBalance += dp;
    }
    totalBalance = dpBalance - wdBalance;
    //chekc balance vs recorded balance
    if (totalBalance !== account.balance) {
      wrongBalances.push(account);
    }
  }
  return wrongBalances; 

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
