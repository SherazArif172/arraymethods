const str = "ABCD EF GHI JK LLl MNOPQ  RST UVWX Y Z";

console.log(str.match(/L/)); // searchs uptill only first letter L in string
console.log(str.match(/L/g)); // search all the defined characters in given string
console.log(str.match(/L/gi)); // search globaly  i=case insesnsitive
console.log(str.match("L")); // wil find onnly first occourance of the defined character

// if no match is found returns null
