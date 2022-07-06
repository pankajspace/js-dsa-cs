// const result = [];

function mergeSort(array) {
  const length = array.length;
  if (length === 1) {
    return array;
  }
  // Split Array in into right and left
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

// function merge(left, right) {
//   const result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;
//   while(leftIndex < left.length && rightIndex < right.length){
//      if(left[leftIndex] < right[rightIndex]){
//        result.push(left[leftIndex]);
//        leftIndex++;
//      } else{
//        result.push(right[rightIndex]);
//        rightIndex++
//     }
//   }  
//   // console.log('left', left);
//   // console.log('leftIndex', leftIndex);
//   // console.log('left.slice(leftIndex)', left.slice(leftIndex));
//   // console.log('right', right);
//   // console.log('rightIndex', rightIndex);
//   // console.log('right.slice(rightIndex)', right.slice(rightIndex));
//   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
//   // return result;
// }

function merge(leftArr, rightArr) {
  var sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr[0]);
      leftArr = leftArr.slice(1)
    } else {
      sortedArr.push(rightArr[0]);
      rightArr = rightArr.slice(1)
    }
  }
  while (leftArr.length)
    sortedArr.push(leftArr.shift());
  while (rightArr.length)
    sortedArr.push(rightArr.shift());
  return sortedArr;
}

const sortedArray = mergeSort([3, 6, 8, 9, -1, -2, 9, 2, 1, 4, 0, 7, 5]);
console.log(sortedArray);