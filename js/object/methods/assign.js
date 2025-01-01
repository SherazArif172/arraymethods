const simpleObj_1 = {
  name: "sheraz",
  email: "sherazarifofficial@gmail.com",
  age: 25,
  city: "lahore",
};
const simpleObj_2 = {
  country: "pakistan",
  living: "on earth",
};

const target = {};

const asign = Object.assign(target, simpleObj_1, simpleObj_2);

console.log(asign);
