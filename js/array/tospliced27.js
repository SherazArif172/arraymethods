const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

const arr2 = arr.toSpliced(2, 0, 22, 23);

console.log(arr2);
console.log(arr);

// does not modifies the origonal aray
// first value is starting value , second number shows the number of values to be deleted and all the other values after this will be added of the defned index
