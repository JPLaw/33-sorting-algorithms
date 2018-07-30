'use strict';

const mergeSort = (array) => {
  // get a midpoint
  const midPoint = Math.floor(array.length / 2);

  // split up the array in two 
  const a = mergeSort(array.slice(0, midPoint));
  const b = mergeSort(array.slice(midPoint));

  // create an array that will hold the result
  const result = [];

  // keep track of indexes when sorting elements in a and b
  let indexA = 0;
  let indexB = 0;

  // while both indexes are smaller than the length of their arrays
  while (indexA < a.length && indexB < b.length) {
    // get current elements
    const elementA = a[indexA];
    const elementB = b[indexB];
  
  
  }
// FINISH MERGE SORT
