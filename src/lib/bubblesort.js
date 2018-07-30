'use strict';

// Bubblesort alogorithm
// Big O time: O(n) --> n = number of items in array
// Big O space: 
// ** Not the most preferred method of Bubblesort- this is one I interpreted the best, and therefore was easier for me to write. There are versions with a swap method included, and with more research, I think I could refactor this. 

function bubbleSort(array) {
  // Iterate through every element in array
  for (let i = 0; i < array.length; i++) {
    // At every index, check if the first element is larger than the second
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        // if it is bigger swap them so the smaller one goes in front of the bigger one.
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      }
    }
  }
  // return the newly sorted array
  return array;
}

bubbleSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]);
