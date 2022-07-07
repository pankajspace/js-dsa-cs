// factorial simple recursion
function factorial(num) {
  if (num < 3) { return num }
  return num * factorial(num - 1);
}
// console.log(factorial(3));

// -----------------------------------------------------------

// factorial short
// 5 * 4 * 3 * 2 * 1
const fact = num => num < 3 ? num : fact(num - 1) * num;
// console.log(fact(3));

// ----------------------------------------------------------

// recursion using helper method
// collect all odd elements in array
function collectOddValuesHelper(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 == 0) {
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }
  helper(arr)

  return result;
}
// console.log(collectOddValuesHelper([1, 2, 3, 4, 5, 6, 7, 8, 9]));

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

  // return newArr.concat(collectOddValues(arr.slice(1)));
  return [...newArr, ...collectOddValues(arr.slice(1))]
}
// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]))

// ------------------------------------------------------------

// fibonnaci simple
// 0 1 1 2 3 5 8 13 21 34 55
let steps = 0;
const fibonnaci = (position) => {
  steps++;
  return position < 2 ? position : fibonnaci(position - 1) + fibonnaci(position - 2);
}
console.log('fibonnaci: ' + fibonnaci(6) + ', steps: ' + steps);

// -----------------------------------------------------

// fibonnaci short
const fib = position => position < 2 ? position : fib(position - 1) + fib(position - 2);
// console.log(fib(6));

// ----------------------------------------------------------

// fibonnaci using mmemoization
let stepsMemoized = 0;
const cache = {};
function fibonnaciMemoized(position) {
  stepsMemoized++;
  if (position in cache) {
    return cache[position];
  } else {
    return cache[position] = position < 2 ? position : fibonnaciMemoized(position - 1) + fibonnaciMemoized(position - 2);
  }
}
console.log('fibonnaciMemoized: ' + fibonnaciMemoized(6) + ', stepsMemoized: ' + stepsMemoized);

// ------------------------------------------------

// power(2, 0)  //  1
// power(2, 2)  //  4
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// -------------------------------------------------

// productOfArray([1, 2, 3]) // 6
// productOfArray([1, 2, 3, 10]) // 60
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

// ---------------------------------------------------

// recursiveRange(6) // 21
// recursiveRange(10) // 55 
function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}

// ---------------------------------------------------

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

// ---------------------------------------------------

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
  return false;
}

// ---------------------------------------------------

// const isOdd = val => val % 2 !== 0;
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}

// ---------------------------------------------------

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
function flatten(oldArr) {
  var newArr = []
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]))
    } else {
      newArr.push(oldArr[i])
    }
  }
  return newArr;
}

// ---------------------------------------------------

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;

}

// ---------------------------------------------------

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10

function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

// ---------------------------------------------------

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}

// ---------------------------------------------------

// let obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66
//     }
//   }
// }

// stringifyNumbers(obj)

// {
//   num: "1",
//     test: [],
//       data: {
//     val: "4",
//       info: {
//       isRight: true,
//         random: "66"
//     }
//   }
// }
function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// ---------------------------------------------------

// const obj = {
//   stuff: "foo",
//   data: {
//     val: {
//       thing: {
//         info: "bar",
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: "baz"
//           }
//         }
//       }
//     }
//   }
// }

collectStrings(obj) // ["foo", "bar", "baz"])

function collectStrings(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
    for (var key in o) {
      if (typeof o[key] === 'string') {
        stringsArr.push(o[key]);
      }
      else if (typeof o[key] === 'object') {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}

// ---------------------------------------------------

// pure recursion
function collectStrings(obj) {
  var stringsArr = [];
  for (var key in obj) {
    if (typeof obj[key] === 'string') {
      stringsArr.push(obj[key]);
    }
    else if (typeof obj[key] === 'object') {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }
  return stringsArr;
}

// ---------------------------------------------------




