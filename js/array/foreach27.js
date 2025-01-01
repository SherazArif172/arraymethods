const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

// will run once for each element till end
// will noe modify the origional array

Array.prototype.myForEach = function (callbackfn) {
  for (let index = 0; index < this.length; index++) {
    const value = arr[index];
    callbackfn(value, index, arr);
  }
};

// arr.forEach((value, index, arr) => {
//   console.log(value, index, arr);
// });

arr.myForEach((value, index, arr) => {
  console.log({ value, index, arr });
});
