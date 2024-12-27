const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

// 1st inclusive last exclusive / does not modify origional array
// const newArrSlice = arr.slice(1, 4);

// 1st inclusive last inclusive / modifies origional array
const newArrSplice = arr.splice(1, 0, 20, 33);
console.log(newArrSplice, arr);
// // remove duplicates
// const newArrFilter1 = [...new Set(arr)];

// filter to remove duplicates
// const newArrFilter2 = arr.filter(
//   (value, index, self) => self.indexOf(value) === index
// );
// console.log(newArrSplice);
// console.log(newArrFilter2);

// Swaping
let x = 10;
let y = 20;
// y = y - x;
// x = y + x;
console.log({ x, y });

[x, y] = [y, x];
console.log({ x, y });

// Multiplication in an array through map
// const arrMultiply = arr.map((value) => {
//   return value * 5;
// });
// console.log(arrMultiply);

// Multilication through the for loop
// for (let i = 0; i <= arr.length; i++) {
//   const neww = arr[i] * 5;
//   console.log(neww);
// }

// for of loop                   it gives the exact values of the array
// for (const name of arr) {
//   console.log(name * 5);
// }

// for in loop                   it only gives the index
// for (const index in arr) {
//   console.log(arr[index] * 5);
// }

// for of for a string
// const stringg = "helow world";
// for (const char of stringg) {
//   console.log(char);
// }

// Shift method in js array
// console.log(arr.shift());
// console.log(arr);

//unshift in array
// console.log(arr.unshift(7));
// console.log(arr);

// concat in js
// const arr2 = [9, 10, 11];
// const arr3 = arr.concat(arr2);
// console.log(arr3);

// concat in string
// const string1 = "pakistan";
// const string2 = "islamabad";
// const string3 = string1.concat(string2);
// console.log(string3);

// for (const number in arr) {
//   console.log(arr[number]);
// }

// for (i = 0; i < arr.length; i++) {
//   console.log({ elem: arr[i] });

//   for (let j = 8; j > arr[i]; j--) {
//     console.log(j);
//   }
// }

const newObject = "asimAli";

for (const asim in newObject) {
  console.log(asim);
}
