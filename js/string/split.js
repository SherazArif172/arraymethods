const str = "ABCDEF GHI JK L MNOPQ RST UVWX Y Z";
const str2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(str2.split("", 8));
console.log(str.split(" ", 5)); // splits the words havign spaces in them

// makes sustrngs of the main string
// 8 and 5 = uptill this index will make substring
