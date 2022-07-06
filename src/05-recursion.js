// factorial simple recursion
function factorial(num) {
  if (num == 1) { return 1 }
  return num * factorial(num - 1);
}
console.log(factorial(3));

// -----------------------------------------------------------

// factorial short
// 5 * 4 * 3 * 2 * 1
const fact = (num) => num < 3 ? num : fact(num - 1) * num;
console.log(fact(3));

// ----------------------------------------------------------

// recursion using helper method
// collect all odd elements in array
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }
  helper(arr)

  return result;
}
console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// ----------------------------------------------------------

// pure recursion
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  // newArr = newArr.concat(collectOddValues(arr.slice(1)));
  // return newArr;

  return [...newArr, ...collectOddValues(arr.slice(1))]
}
console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]))

// ------------------------------------------------------------

// fibonnaci simple
// 0 1 1 2 3 5 8 13 21 34 55
let steps = 0;
const fibonnaci = (position) => {
  steps++
  return position < 2 ? position : fibonnaci(position - 1) + fibonnaci(position - 2);
}
console.log('fibonnaci: ' + fibonnaci(6) + ', steps: ' + steps);

// -----------------------------------------------------

// fibonnaci short
const fib = (position) => position < 2 ? position : fib(position - 1) + fib(position - 2);
fib(6);

// ----------------------------------------------------------

// fibonnaci using mmemoization
let stepsMemoized = 0;
const cache = {};
function fibonnaciMemoized(position) {
  stepsMemoized++;
  if (position in cache) {
    return cache[position];
  } else {
    return cache[position] = position < 2 ? position : fibonnaci(position - 1) + fibonnaci(position - 2);
  }
}
console.log('fibonnaciMemoized: ' + fibonnaciMemoized(6) + ', stepsMemoized: ' + stepsMemoized); 
