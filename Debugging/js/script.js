// 1

console.log('hello');

const name = 'nse';
console.log(name);

const responseDataOne = [
    {
        name: "nsebo",
        age: "33"
    },
    {
        name: "Uzo",
        age:"32"
    }
];

const responseDataTwo = [
    {
        name: "nsebo",
        age: "33"
    },
    {
        name: "Uzo",
        age:"32"
    }
];

console.log("responseDataOne:" , responseDataOne)
console.log("responseDataTwo:", responseDataTwo)


console.log(8+22)

// const sum = 8+22;

// console.log("my " + "name " + "is " + sum + " nsebo")
// console.log(`My name is Uzochukwu ${sum}`)

// console.clear()

// console.log( responseDataOne);
// console.table(responseDataOne);

console.time(); // this starts the timer

console.timeEnd(); // this ends the timer

function complexCalculation(){
    for(let i = 1; i <= 3; i++){
        console.log(i)

    }
}
console.time("myTimer");
complexCalculation()
console.timeEnd("myTimer")


console.time("myTimer");
complexCalculation()
console.timeEnd("myTimer")

console.time("myTimer");
complexCalculation()
console.timeEnd("myTimer")

// 1.

//function sum (number1, number2){
   // return number1 + number2;
//}

//let number1 = 10;
//console.log(number1)

//let number2 = 20;
//console.log(20)

//let total = sum( number1, number2)
//console.log("total:", total)

//

function getAverage(number1, number2, number3){
    return (number1 + number2 +number3) / 3;
}

let myAverage = getAverage(9 + 7 + 8)
console.log("myAverage: ", myAverage)



const myArray = [1, 3, 4, 5]
// create a function which gets the average of the numbers in this array

function getArrAverage (arr){
    var total = 0;
    for (var i = 0; i < arr.length; i++){
        total += arr[i];
    }
    const numberOfItemInArr = arr.length;
    let average = total / numberOfItemInArr;
    return average;

}

const resultAverage = getArrAverage(myArray);

console.log("resultAverage:", resultAverage)

// when you make an api call

function getCatFacts(){
    fetch("https://catfact.ninja/facts")
        .then(response =>{
          return response.json();
    })
        .then(data =>{
        console.log(data)
            console.log(data.data)

    }).catch( error =>{
            }
        )
}
getCatFacts()

 async function getCatyFacts(){
    const response = await fetch("https://catfact.ninja/facts");
    console.log(response)
    const catFacts  = await response.json()
     console.log(catFacts),
         console.log(catFacts.data);
    return catFacts;
}
getCatyFacts()