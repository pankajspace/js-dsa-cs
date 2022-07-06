// binary search
// for binary search to work array must be sorted
const binarySearch = (arr, item) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== item && start <= end) {
    item < arr[middle] ? end = middle - 1 : start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] == item ? middle : -1;
}
console.log(binarySearch([1, 4, 8, 12, 35, 47, 65, 72, 87, 95, 98], 65));
// binarySearch([1,4,8,12,35,47,65,72,87,95], 651);