const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

// arr.push(9, 10);
// console.log(arr);

// modifies the origiona value
// changes the length of an array
// added the value or values at the end of an array

const outPut = [];

Array.prototype.myPush = function () {
  for (let i = 0; i < this.length; i++) {
    const elements = this[i];

    console.log(elements);
    return outPut.push(elements);
  }
};

arr.myPush();
