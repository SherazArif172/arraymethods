const str = "ABCD EF GHI JK L MNOPQ  RST UVWX Y Z";

console.log(str.endsWith("Z", 36));

// case sensitive
// the number truncates the string uptill the given index and then checks either the given characger is exists in the truncated stringor not
