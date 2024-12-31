const str = "ABCDEFGHIJKL MNOPQ  RST UVWX Y Z";

console.log(str.lastIndexOf("L", 17));

// gives -1 when nothing matches
// checks the index of string
// 17 = in the index from where it starts searching
// starts checking from last defined index
