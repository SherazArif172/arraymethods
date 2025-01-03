const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

const newArr = arr.every((x) => x > 6);
// console.log(newArr);

// to check fr all the entries of the array
// if one is false it will return false
// to return true all should be true

Array.prototype.myEvery = function (callbackfn) {
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (!callbackfn(element, index, this)) {
      return false;
    }
  }

  return true;
};

console.log(arr.myEvery((element) => element < 8));
