const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

const entriesHere = arr.entries();

for (const [index, value] of entriesHere) {
  console.log(`index: ${index}, value: ${value} `);
}

// entries returns key/value pairs
// does not changes the origional array
