const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    for (let j = i - 1; j >= 0; j--) {
      let temp = array[j];
      if (current < array[j]) {
        array[j + 1] = temp;
        array[j] = current;
      }
    }
  }
  return array;
}

insertionSort([3, 6, 8, 9, -1, -2, 9, 2, 1, 4, 0, 7, 5]);
// insertionSort([-1, 3, 6, 8, 9, -2, 9, 2, 1, 4, 0, 7, 5]);
//                                 i
//                             j 
// current =  -2    
// temp =     9
