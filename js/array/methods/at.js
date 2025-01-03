const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

// const arrAt = arr.at(45);
// console.log(arrAt);

// console.log(arr);

Array.prototype.myAt = function (index) {
  const idx = index < 0 ? this.index + index : index;
  return this[idx];
};

console.log(arr.myAt(44));
