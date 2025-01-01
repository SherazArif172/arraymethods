const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

// arr.splice(2, 3); // will start remove from index 2 and will remove 3 digits including index 2
arr.splice(2, 0, 44, 55, 66); // will start adding from index 2 and will remove 0 values and all the other values will be added defined after

console.log(arr);
