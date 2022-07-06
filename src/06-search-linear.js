// linear search: returns index of element found or if not found returns 0
const linearSearch = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      return i
    }
  }
  return -1;
}
console.log(linearSearch([1, 14, 8, 12, 98, 47], 12));
console.log(linearSearch([1, 14, 8, 12, 98, 47], 121));
