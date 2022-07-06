const bubbleSort = (array) => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j + 1] && array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    // console.log(array)
    // console.log("-------------------------");
  }
  // return JSON.stringify(array);
  return array;
}
// console.log(bubbleSort([3, 6, 8, -1, -2, -8, 2, 1, 4, 0, 7, 9, 5]));
console.log(bubbleSort([2, 3, 1]));
