const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(str.charAt(1));

// it is same like at() but main difference btween these two is that when a nagative values is passed it it it gives empety string and at() gives value in reverse order

String.prototype.myCharAt = function (pos) {
  console.log(this, pos);

  return this[pos];
};

console.log(str.myCharAt(1));
