const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

const arr2 = arr.flatMap((x) => [x, x * 5]); // x is the value

console.log(arr2);
console.log(arr);

// makes flat the array
// does not modifies the origional array
