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

console.log(matchPair([-4, -2, 1, 3, 4]));
console.log(matchPair([-4, -2, 1, 3, 5]));
console.log("---------------------------------------")

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
console.log(countUniques([]));
console.log(countUniques([0]));
console.log(countUniques([1, 1, 2, 2, 2, 3, 5, 8, 8, 9]));


