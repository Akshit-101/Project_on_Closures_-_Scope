// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop

// Progression 2: add 3 variables: title, currIndex, check

// Progression 3: create a function "searchForElement"

// Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
// to return the desired output.

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const itemToSearch = 4;
// Define NEG_INF constant
const NEG_INF = -1000000;

// Define createPop function
function createPop(arrayOfNumbers, itemToSearch) {
  // Define variables currIndex and check
  let currIndex = NEG_INF;
  let check = false;

  // Define searchForElement function
  function searchForElement() {
    // Check if itemToSearch is present in arrayOfNumbers
    if (arrayOfNumbers.includes(itemToSearch)) {
      currIndex = arrayOfNumbers.indexOf(itemToSearch);
      check = true;
    } else {
      currIndex = NEG_INF;
      check = false;
    }
  }

  // Call searchForElement function
  searchForElement();

  // Return a function to display result
  return function () {
    if (check) {
      return `The item is present and is at index ${currIndex}`;
    } else {
      return `The item is not present and is at index ${currIndex}`;
    }
  };
}

const any = createPop(arrayOfNumbers, itemToSearch);
console.log(any());

// console.log(restFunction());
