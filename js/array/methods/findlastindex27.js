const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

console.log(arr.findLastIndex((x) => x > 3));

// find the last index of the array who passes the test
// does not modifies the origional array
// it returns -1 if no index is matched
