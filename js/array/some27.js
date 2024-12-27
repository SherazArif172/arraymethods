const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

const newArr = arr.some((a) => {
  return a > 6;
});

console.log(newArr);

// does not modifies the origional array
// callback function run for eac element when it satisfies the condition it returns true else false
