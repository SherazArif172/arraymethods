const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

arr.pop();
// console.log(arr);

// it removes the last value of an array
// modifies the origional array

Array.prototype.myPop = function () {
  const element = this[this.length - 1];
  this.length = this.length - 0;
  return element;
};

console.log(arr.myPop());
console.log(arr);
