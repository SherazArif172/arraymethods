const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

const arr2 = arr.values();

for (const element of arr2) {
  console.log(element);
}

console.log(arr);

// does not modifies the origional array
