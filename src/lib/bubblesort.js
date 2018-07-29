'use strict';

function bubbleSort(array) {
  let result = array.length; // eslint-disable-line

  // Iterate through every element in array
  for (let i = result - 1; i >= 0; i--) {
    // At every index, check if the next element is larger than the current 
    for (let j = 1; j <= i; j++) {
      if (result[j] < result[j - 1]) {
        // If so, use a temp variable At the end, the largest element should be at the end of array
        let temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

bubbleSort([1, 4, 8, 3, 6, 5, 9]);
