const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

console.log(arr.findIndex((x) => x > 6));

// gives index of first value of then given array who passes the condition
// if does not matches any value it gives -1
// does not modifies the origional array
