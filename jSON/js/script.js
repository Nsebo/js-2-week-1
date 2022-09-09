// JSON is used between data - API

//1. javascript to json
//  JSON .stringify()
// example 1

const userDetails = {
  name: 'Uzo',
  id: '1989',
  isStudent: true,
  section: 'Front-End Development',
};

console.log('userDetails JS format:', userDetails);

const userDataJSON = JSON.stringify(userDetails);
console.log('userDetails JS format:', userDataJSON);

// JSON.parse() - this is what we used to convert Json data to js format
const userDataBackToJS = JSON.parse(userDataJSON);
console.log('userDetails JS format:', userDataBackToJS);

// create a JSON DATA object and convert it to js

const nseboIsGoodGirl = '{"name": "Nsebo", "id":1989, "isGoodGirl": false}';

const myObjectsJS = JSON.parse(nseboIsGoodGirl);

console.log('myObjectsJS:', myObjectsJS);

const cityJSON =
  '{"country": "Norway","city": "Alta","population": 2000,"tempterature": -30,"north-Norway": true}';

const JSONexample =
  "{'country': 'Norway','city': 'Alta', 'population': 2000, 'tempterature': -30, 'north-Norway': true}";

console.log('cityJSON :', cityJSON);
