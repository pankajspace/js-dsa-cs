const selectionSort = (array) => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    // set current index as minimum
    let minIndex = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < temp) {
        //update minimum if current is lower that what we had previously
        minIndex = j;
      }
    }
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}

selectionSort([3, 6, 8, 9, -1, -2, 9, 2, 1, 4, 0, 7, 5]);
// selectionSort([-2, -1, 8, 9, 6, 3, 9, 2, 1, 4, 0, 7, 5]);
//                        i
//                              j
// minIndex = 2
// temp = 8