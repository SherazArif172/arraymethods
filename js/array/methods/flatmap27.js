const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

console.log(arr);
const arr2 = arr.flatMap((x) => [x, x * 5]); // x is the value

console.log(arr2);

// makes flat the array
// does not modifies the origional array
