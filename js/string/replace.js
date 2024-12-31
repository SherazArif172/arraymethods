const str = "AaBbBBBBBBBBBBBBBBBBBBBBBB";

console.log(str.replace("a", "M"));
console.log(str.replace(/B/g, "M"));
console.log(str.replace(/B/gi, "M"));
