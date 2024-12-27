const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

const filterArray = arr.filter((values) => {
  return values % 2 == 0;
});

// console.log(filterArray);
console.log(arr);

// will return al the values who passes the test
// does not modifies the origional array
