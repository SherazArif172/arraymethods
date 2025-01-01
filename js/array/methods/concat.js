const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];
const arr2 = [7, 8, 9, 9];
const arr3 = [10, 11, 12, 13];

const arr4 = arr.concat(arr2);
const arr5 = arr.concat(arr2, arr3);

console.log(arr5);

// concat(joins) two or more arrays
// does not modifies the origional arrays
