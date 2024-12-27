// const arr = [1, 2, 2, 3];
const arr2 = ["a", "b", "c"];

const newArr = arr2.reduce((acc, curr) => {
  console.log({ acc, curr });

  return acc + "-" + curr;
}, "Umair ");

console.log(newArr);

// does not chanes the origional array
// only aplicable on number
// gives the single value
