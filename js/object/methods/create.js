const simpleObj_1 = {
  name: "sheraz",
  email: "sherazarifofficial@gmail.com",
  age: 25,
  city: "lahore",
};

const newObject = Object.create(simpleObj_1);

newObject.name = "ali raza";
newObject.age = 77;
console.log(newObject);

// creatig a new object from an existing object
