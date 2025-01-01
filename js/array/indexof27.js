const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

console.log(arr.indexOf(3));

// gives the index of specified value in indexOf()
// if does not match it gives -1

Array.prototype.myIndexOf = function () {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
  }
};
