const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

console.log("origional array", arr);

const arr2 = arr.copyWithin(2, 4, 7);
// 2 = index where we have to paste the cpied values
// 4 = the value of indexfrom where to start copying te values
// 7 = end point whereover the values are to be copied

console.log(arr2);

// modifies the origional array

Array.prototype.myCopyWithIn = function (target, start, end) {
  if (target < 0) {
    this.length += index;
  }
  if (start < 0) {
    this.length += index;
  }
  if (end < 0) {
    this.length += index;
  }
};
