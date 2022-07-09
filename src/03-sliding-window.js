// find subset of an data based on some condition


// find a longest substring of unique characters
// longestUniqueCharSubstring('pankaj') //  4
const longestUniqueCharSubstring = (str) => {
  let longest = 0;
  let longestStr = "";
  let seen = {};
  let start = 0;
  let next = 0;
  while (next < str.length) {
    // Take current character from string
    let char = str[next];
    console.log('char', char);
    // If current character is already present in map
    if (seen[char]) {
      // Check if start index is greater than current character's last index
      start = Math.max(start, seen[char]);
      console.log('start', start);
    }
    // If new substring is longer than older
    if (longest < next - start + 1) {
      longest = next - start + 1;
      console.log('longest', longest);
      // Take slice of longer substring
      longestStr = str.slice(start, next + 1);
      console.log('longestStr', longestStr);
    }
    // Update current characters index
    seen[char] = next + 1;
    console.log('seen[char]', seen[char]);
    // Move to next character
    next++;
    console.log('next', next);
  }
  console.log(str, "->", longestStr, "->", longest);
  console.log('seen', seen);
  return longest;
}
// console.log(longestUniqueCharSubstring('pankaj')); //  4
// console.log(longestUniqueCharSubstring('pankajwakchaure')); //  4

// ------------------------------------------------------------------

// find a max subarray sum of elements next to one another
// maxSubarraySum([1, 8, 5, 2, 9, 0, 8, 1], 2); output: 13
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); output: 17
function maxSubarraySum(arr, num) {
  if (!arr.length) {
    return 0;
  }
  if (arr.length < num) {
    return 0;
  }
  if (arr.length == num) {
    return arr.reduce((acc, ele) => acc + ele);
  }
  let tempSum = 0, maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}
// console.log(maxSubarraySum([0], 2));
// console.log(maxSubarraySum([1], 2));
// console.log(maxSubarraySum([1, 2], 2));
// console.log(maxSubarraySum([1, 8, 5, 2, 9, 0, 8, 1], 2));
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));

// -----------------------------------------------------

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))  //  2
// console.log(minSubArrayLen([2, 3, 1, 2, 4, 4], 6))  //  3
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window 
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// ----------------------------------------------------

// find longest substring with all distinct characters
console.log(findLongestSubstring('hellohihowwdy')) //  3
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

