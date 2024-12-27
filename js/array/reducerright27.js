const arr = [1, 2, 2, 3];

const arr2 = arr.reduceRight((a, b) => {
  return a * b;
});

console.log(arr2);

// start reducing from right and proceds to left
// gives a single value
// does not modifies the origional array
