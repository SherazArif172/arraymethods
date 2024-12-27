const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

const arr2 = arr.forEach((x, y) => {
  console.log(x, y);
});
console.log(arr2);

console.log(arr);

// will run once for each element till end
// will noe modify the origional array
