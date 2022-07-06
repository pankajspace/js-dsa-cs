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
  }
  return array;
}

bubbleSort([3, 6, 8, -1, -2, 9, 2, 1, 4, 0, 7, 5, 9]);
//          i
//                                                j
// temp = 9