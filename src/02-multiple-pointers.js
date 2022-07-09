// condition: array should be sorted for this solution to work

// find a matching pair based on some condition
// eg find pair of elements having sum 0 or return false/undefined
// [-4,-2,1,3,4]
function matchPair(arr) {
  if (arr.length <= 1) {
    return false;
  }
  let left = 0, right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] == 0) {
      return [arr[left], arr[right]];
    }
    if (arr[left] + arr[right] < 0) {
      left++;
    }
    if (arr[left] + arr[right] > 0) {
      right--;
    }
  }

  return false;
}

// console.log(matchPair([-4, -2, 1, 3, 4]));
// console.log(matchPair([-4, -2, 1, 3, 5]));

// --------------------------------------------------------

// count unique values in an array
// [1,1,2,2,2,3,5,6,7,8,8,9]  output:8
// [0] output:1
// [] output:0
function countUniques(arr) {
  if (!arr.length) {
    return 0;
  }

  let i = 0, j = 1, arr2 = [arr[0]];

  while (j < arr.length) {
    if (arr[i] == arr[j]) {
      j++;
    }
    if (arr[i] != arr[j]) {
      arr2.push(arr[j])
      i = j;
      j++;
    }
  }
  // console.log(arr2);
  return arr2.length;
}
// console.log(countUniques([]));
// console.log(countUniques([0]));
// console.log(countUniques([1, 1, 2, 2, 2, 3, 5, 8, 8, 9]));

// -------------------------------------------------------

// areThereDuplicates(1, 2, 3)  // false
// areThereDuplicates(1, 2, 2)  // true
// areThereDuplicates('a', 'b', "c", 'a')  // true
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++
    next++
  }
  return false
}

// ------------------------------------------------

// check whether the pair with the given average is present in array
console.log(averagePair([1, 2, 3], 2.5));  // true
console.log(averagePair([1, 3, 6, 8], 5));  // false
function averagePair(arr, num) {
  let start = 0
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2
    if (avg === num) return true;
    else if (avg < num) start++
    else end--
  }
  return false;
}

// -----------------------------------------------
// isSubsequence('hello', 'hello world')  // true
// isSubsequence('sing', 'sting')  // true
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// --------------------------------------------
// recursive solution
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true
  if (str2.length === 0) return false
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
  return isSubsequence(str1, str2.slice(1))
}
