const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

// const arrAt = arr.at(4);
// console.log(arrAt);

// console.log(arr);

// does not modifies the origiona array
// any value can be extracted from array using this

Array.prototype.myAt = function () {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (this[i] == element) {
    }
    // callbackfn(element);
  }
};

arr.myAt((i) => {
  console.log(i);
});
