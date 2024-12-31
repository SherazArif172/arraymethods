const str = "dog dog dog dog dog dog";

console.log(str.replaceAll("dog", "Cat"));
console.log(str.replaceAll(/dog/g, "cat"));

// replaces ALL THE given characters
// in regular expression use g(gloably for sure to chage all the the existing targeted things)
