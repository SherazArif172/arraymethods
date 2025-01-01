const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

console.log(
  arr.find((x) => {
    x > 4;
  })
);

// returns the first value who satisfies the condition
// does not change the origional array
