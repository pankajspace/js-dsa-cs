// linear search
const linearSearch = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      return i
    }
  }
  return -1;
}
linearSearch([1, 14, 8, 12, 98, 47], 12);
linearSearch([1, 14, 8, 12, 98, 47], 121);
