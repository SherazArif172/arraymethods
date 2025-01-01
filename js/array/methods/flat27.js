const arr = [
  [1, 2, 2],
  [3, 4, 4],
  [5, 6, 6, [3, 3, 2]],
];

console.log(arr.flat(Infinity));
console.log(arr.flat());
console.log(arr);

// will concat all the sub arrays into a single array / make flate the mountain
// does not modifies the origional array
