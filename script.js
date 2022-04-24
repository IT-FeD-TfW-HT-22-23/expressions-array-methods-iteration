// FUNCTIONS DECLARATION AND EXPRESSION
// Main difference is that a function declaration you can call before it's actually
// devlared in the code. You can not do that with a function expression

// FUNCTION DECLARATION
// Fucntion declarations are hoisted basically means that we can call
// them safely before they are declared. Term that was introduced in ES6, general way
// of thinking about how execution contexts work i JS.
/*
hoisted(); // logs the right output without giving error

function hoisted() {
  console.log("This is hoisted");
}

// FUNCTION EXPRESSION
//console.log(notHoisted);

//

const notHoisted = function () {
  console.log("This is not hoisted");
};

notHoisted();


// ARROW FUNCTIONS
// was introduced in ES6, modern javascript
// makes it easier and faster for us to write functions

// function expression
const calcAgeOldway = function (birthYear) {
  return 2021 - birthYear;
};

// arrow function
const calcAge = (birthYear) => 2021 - birthYear;
// also an expression

const age = calcAge(1985);
console.log(age);

const yearsUntilRetire = (birthday) => {
  const age = 2021 - birthday;
  const retire = 65 - age;
  return retire;
};

const yearsLeft = yearsUntilRetire(1985);
console.log(`You have ${yearsLeft} years until you can retire`);

const newYearsRetire = (birthYear, firstName) => {

}


// FUNCTIONS CALLING OTHER FUNCTIONS

function slice(breakfast) {
  return breakfast * 2;
  // we have one 1 piece and it return 2 pieces
}

function makeSandwich(bread, cheese) {
  const breadSlices = slice(bread);
  const cheeseSlices = slice(cheese);
  // calling for the slice() function inside of another function

  const sandwich = `I'm having ${breadSlices} slices of bread with ${cheeseSlices} slices of cheese for breakfast`;
  return sandwich;
}
console.log(makeSandwich(2, 4));


// ARRAYS

const dog1 = "Tore";
const dog2 = "Clementine";
const dog3 = "Doris";

// an array is kinda like a big container where we can store stuff if we have more
// than one value

//const years = [1985, 1990, 1994];
//console.log(years);

//const years = new Array(1994, 1985, 2015, 2020);
// different way of creating an array

const dogs = ["Tore", "Clementine", "Doris"];
console.log(dogs);

console.log(dogs[0]);
// the first index is always 0 arrays does not start at 1 tehy start at 0
// important to remember!

console.log(dogs[2]);

console.log(dogs.length);
// this will give us the exact number of elements in the array

console.log(dogs[dogs.length - 1]);
// useful when working with big data and arrays when you dont know
// how many elements it contains

// can mutate arrays
dogs[0] = "Trasan";
console.log(dogs);

const dogName = "Tore";
const tore = [
  dogName,
  "Miniature Bull Terrier",
  2021 - 2018,
  "He likes sleeping in his fluffy bed",
  dogs,
];
// an array can hold different values
console.log(tore);
console.log(tore.length);
console.log(tore[2]);


const calcAge = function (birthYear) {
  return 2021 - birthYear;
};
// funciton to calculate age

const yearOfBirth = [1999, 1985, 2001, 2016, 1978];
// array with birth years

//calcAge(yearOfBirth);
// function call

//console.log(calcAge(yearOfBirth));
// js has no idea what to do

const firstAge = calcAge(yearOfBirth[0]);
// calculating the first age of the array
const secondAge = calcAge(yearOfBirth[3]);

console.log(firstAge, secondAge);


// ARRAY METHODS

const dogs = ["Tore", "Clementine", "Doris"];

dogs.push("Trasan");
console.log(dogs);
// push adds a new element to the last index of the array
// also return the new length of the array

dogs.unshift("Kerstin");
console.log(dogs);
// add something to the beginning fo the array
// just like push it returns the new length

dogs.pop();
// can not execute anything else than remove the last element
console.log(dogs);

dogs.shift();
console.log(dogs);

console.log(dogs.indexOf("Doris"));
// check what position an element has in the array

console.log(dogs.includes("Doris"));
// includes will return true if the element is in the array and false if not
console.log(dogs.includes("Helena"));

if (dogs.includes("Tore")) {
  console.log("You have a dog called Tore");
}


*/

// ITERATION
// loops are controlled structures and a fundemental part of programming

//console.log("Lifting weights rep 1");
// we want to ten reps

// for loop
//for (let rep = 1; rep <= 10; rep++) {
//console.log(`Lifting weights rep ${rep}`);
//}
// for loop has three parts

// LOOPING THROUGH ARRAYS

/*
//for (let i = 0; i < 5; i++) {
//console.log(helena[i]);
//}

//for (let i = 0; i < helena.length; i++) {
//console.log(helena[i]);
//}

const types = [];
// empty array

console.log(types);
for (let i = 0; i < helena.length; i++) {
  // reading from the array
  console.log(helena[i], typeof helena[i]);
  // fill the new array
  //types[i] = typeof helena[i];
  types.push(typeof helena[i]);
  // same but a little bit cleaner way of filling the array
}

console.log(types);

// CONTINUE & BREAK
// continue is used to exit the current iteration in the loop and go to next one

console.log("ONLY STRINGS!");
for (let i = 0; i < helena.length; i++) {
  if (typeof helena[i] !== "string") continue;
  // if the current index of Helena is not a string then skip this
  // and move on to the next iteration
  console.log(helena[i], typeof helena[i]);
}

// BREAK
// complpetely terminates the whole loop

console.log("BREAK WITH NUMBERS!");
for (let i = 0; i < helena.length; i++) {
  if (typeof helena[i] === "number") break;
  // if the current iteration is
  // not a string skip this and
  // and move to the next iteration
  console.log(helena[i], typeof helena[i]);
}*/

// LOOP ARRAY BACKWARDS

const helena = ["Helena", "Johansson", 2021 - 1985, "developer"];

//for (let i = helena.length - 1; i >= 0; i--) {
// console.log(helena[i]);
//}

// LOOP INSIDE LOOP
// 3 different exercises and lets do 5 reps each
/*for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Starting exercises ${exercise} `);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Doing rep nr ${rep}`);
  }
}

// WHILE LOOP
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Doing rep nr ${rep}`);
}
// for loop

let rep = 1; // variable that we use as a counter
while (rep <= 10) {
  // this will run while the condition is true
  console.log(`Doing rep nr ${rep}`);
  rep++;
}


let dice = Math.trunc(Math.random() * 6);
// this will give us a random number
console.log(dice);

while (dice !== 6) {
  // condition is not 6 so as soon as
  // the calue is 6 it will stop
  console.log(`You rolled ${dice}`);
  // right now the loop would run forever, crash your browser
  dice = Math.trunc(Math.random() * 6) + 1;
  // create a new random number and the loop runs again
  if (dice === 6) {
    console.log("Loop is about to end...");
  }
}
*/

const calcAgeOldway = function () {
  //return 2021 - birthYear;
  console.log("Loggar");
};

// arrow function
const calcAge = (birthYear) => 2021 - birthYear;
// also an expression

const age = calcAge(1985);
console.log(age);

const yearsUntilRetire = (birthyear) => {
  const age = 2021 - birthyear;

  const retire = 65 - age;

  console.log(retire);
  return retire;
};

//calcAgeOldway();

console.log(yearsUntilRetire(1985));
