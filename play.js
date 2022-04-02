// let name = 'Juli';
// let age = 27;
// let hasHobbies = true;

// const summerizeUser = (userName, userAge, userHasHobbies) => {
//   return `Name is ${userName}, age is ${userAge}, and user has hobbies: ${userHasHobbies}`;
// };

const person = {
  name: 'juli',
  age: 27,
  greet() {
    console.log(`Hi, I am ${(this, name)}`);
  },
};

const { name } = person;
console.log(name);
const copiedPerson = { ...person };

const hobbies = ['Fitness', 'Coding'];

console.log(hobbies.map((hobby) => `Hobby: ${hobby}`));
console.log(hobbies);

hobbies.push('Swimming');
console.log(hobbies);

const copiedHobby = [...hobbies];

const [hobby1] = copiedHobby;
console.log(hobby1);

console.log(copiedPerson);
console.log(copiedHobby);

const add = (a, b) => a + b;

const addOne = (a) => a + 1;

const addRand = () => 11 + 2;

console.log(addOne(2));

console.log(add(1, 2));

// console.log(summerizeUser(name, age, hasHobbies));

person.greet();
