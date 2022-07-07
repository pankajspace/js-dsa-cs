// check if second array has all the values squared of the first array

// should return false for following arrays
// [2,3] [9,3]
// [2] [9,3]

// shold return true for following arrays
// [2,3,4] [9,16,4]

const checkSquared = (arr1, arr2) => {
  if (arr1.length != arr2.length) {
    return false;
  }

  const obj1 = {}, obj2 = {};

  for (let elem of arr1) {
    obj1[elem] = (obj1[elem] || 0) + 1;
  }

  for (let elem of arr2) {
    obj2[elem] = (obj2[elem] || 0) + 1;
  }

  console.log(obj1, obj2)

  for (let key in obj1) {
    if (!obj2[key ** 2]) {
      return false;
    }
    if (obj2[key ** 2] !== obj1[key]) {
      return false;
    }
  }

  return true;
}

console.log(checkSquared([2, 3, 3], [9, 4, 9]))
console.log(checkSquared([2, 3], [9, 4, 4]))
console.log(checkSquared([2, 3], [9, 1]))

// similar problems
// anagram of string : abcd, cdba; abcdd, cdabd
// 'pankaj' 'nakjap' //true
// 'pankaj' 'nakiap' //false
const isValidAnagram = (str1, str2) => {
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  if (arr1.length != arr2.length) {
    return false;
  }
  const obj1 = {};
  const obj2 = {};
  arr1.forEach((item) => {
    obj1[item] ? obj1[item] = ++obj1[item] : obj1[item] = 1;
  });
  console.log(obj1);
  arr2.forEach((item) => {
    obj2[item] ? obj2[item] = ++obj2[item] : obj2[item] = 1;
  });
  console.log(obj2);
  for (let key in obj1) {
    if (obj2[key] == undefined) {
      return false;
    }
    if (obj2[key] != obj1[key]) {
      return false;
    }
  }
  return true;
}

console.log(isValidAnagram('pankaj', 'nakjap'));
console.log(isValidAnagram('pankaj', 'nakiap'));

// -------------------------------------------------

// sameFrequency(181,281) false
// sameFrequency(6305,50639) false
// sameFrequency(241,142) true
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

// ---------------------------------------------

// areThereDuplicates(1, 2, 3)  // false
// areThereDuplicates(1, 2, 2)  // true
// areThereDuplicates('a', 'b', "c", 'a')  // true
function areThereDuplicates() {
  let collection = {}
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for (let key in collection) {
    if (collection[key] > 1) return true
  }
  return false;
}

// -------------------------------------------------

function areThereDuplicatesShort() {
  return new Set(arguments).size !== arguments.length;
}


