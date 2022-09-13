// destructing
// example 1
// destruct from objects

// dot notation
const person = {
  firstName: 'Uzo',
  lastName: 'Oloh',
  country: 'Nigeria',
};

const { firstName, lastName, country } = person;
const greeting = `Hello i am  ${person.firstName} ${person.lastName}, from ${person.country}.`;

console.log(greeting);

// the old method of destructing
function greetUsers(UserObject) {
  const { firstName, country } = UserObject;
  console.log(`hello ${firstName} from ${country} welcome.`);
}

// the new method of destructing
function greetUsers({ firstName, country }) {
  console.log(`hello ${firstName} from ${country} welcome.`);
}

// log: hello Uzo from Nigeria welcome.

const user = {
  firstName: 'Uzo',
  country: 'Nigeria',
};

greetUsers(user);

// destructing in arrays

const people = [
  {
    name: 'Nse',
    age: '31',
    score: 13,
  },
  {
    name: 'Ngozi',
    age: '33',
    score: 3,
  },
  {
    name: 'Chioma',
    age: '25',
    score: 6,
  },
  {
    name: 'Nkili',
    age: '36',
    score: 11,
  },
];

// rule condition score >= 5

// old method of destructing
// const winners = people.filter((currentItem) => {
//   if (currentItem.score >= 5) {
//     return true;
//   }
// });

// new method of destructing
const winners = people.filter(({ score }) => {
  if (score >= 5) {
    return true;
  }
});

console.log(winners);

// destruct from array

// const [
// values here
// ] = arrayName;

// const [value1, value2] = arrayName;

// example  destructing arrays
//                    0    1   2   3   4  5 indexes
const streetNumbers = [12, 30, 40, 59, 2, 54];
// "x" will be the index of 0
// "y" will be the index of 1

const [x, y] = streetNumbers;

console.log(x, y);

// logs:
// 12 30

// create a string array of names which contain 4 names and then the first three names

const names = ['Hesh', 'Linda', 'Alex', 'Fariad', 'Ade', 'Alexa', 'jenny'];

const [name1, name2, name3, ...others] = names;

console.log(name1, name2, name3);
console.log(others);
// logs: Hesh Linda Alex

const values = [3, 4, 56, 7, 3];
const [value0, , value2, , value5] = values;

console.log(value0, value2, value5);
// logs: 3 4 56

const MyCat = {
  name: 'Billy',
  age: '10',
  typerrr: 'Egyptian Mau',
};

const { name, age, typerrr: breed } = MyCat;

console.log(`my cat name is ${name}, his age is ${10} and the type ${10}`);
