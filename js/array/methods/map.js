const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

console.log(arr.map((value) => (value > 4 ? value * 4 : undefined)));

// does not modifies the original array
// manupulation can be done with function called inside it
