const person = {
  name: 'juli',
  age: 27,
  greet() {
    console.log(`Hi, I am ${(this, name)}`);
  },
};

let name = 'Juli';
let age = 27;
let hasHobbies = true;

const summerizeUser = (userName, userAge, userHasHobbies) => {
  return `Name is ${userName}, age is ${userAge}, and user has hobbies: ${userHasHobbies}`;
};

const add = (a, b) => a + b;

const addOne = (a) => a + 1;

const addRand = () => 11 + 2;

console.log(addOne(2));

console.log(add(1, 2));

console.log(summerizeUser(name, age, hasHobbies));

person.greet();
