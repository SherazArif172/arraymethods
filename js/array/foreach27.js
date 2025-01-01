const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

// const arr2 = arr.forEach((x, y) => {
//   console.log(x, y);
// });
// console.log(arr2);

// console.log(arr);

// will run once for each element till end
// will noe modify the origional array

Array.prototype.myForEach = function (callbackfn) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];

    callbackfn(element, i, this);
  }
};

// arr.forEach((value, index, arr) => {
//   console.log({ value, index, arr });
// });
arr.myForEach((value, index, arr) => {
  console.log({ value, index, arr });
});
