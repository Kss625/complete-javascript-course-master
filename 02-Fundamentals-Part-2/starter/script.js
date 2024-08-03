"use strict"; // use for write to secure the javascript code

// let hasDriversLicense = false;
// const passTest = true;
// // if strict mode is not present then it shows nothing if we used undefined variable like hasDriverLicense instead of hasDriversLicense
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I Can Drive :D");

// // const interface = "Audio"; gives error in strict mode as we can't used reserved word as variable name

/* function
    in
    JavaScript
*/

logger();
// we can call the function before declared them if it is simple function/function declaration
// happens due to hoisting

function logger() {
  console.log("My Name is Jonas");
}

logger();

// -> parameters and arguments in function

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
  //   console.log("Hurray!!!"); can't be executed after return statement
}

fruitProcessor(5, 8); // it just log the values upper to return statement

const appleOrangeJuice = fruitProcessor(5, 3); // it  gives return as well as log value
console.log(appleOrangeJuice);

// -> function Expressions

// console.log(calcAge1(1994)); now it gives error with function expression

const calcAge1 = function (birthYear) {
  return 2024 - birthYear;
};

console.log(calcAge1(1996));

// Arrow functions-helpful to write one line of code

const sumOfTwoNumbers = (n1, n2) => {
  return n1 + n2;
};

const calcAge2 = (birthYear) => 2024 - birthYear;
console.log(sumOfTwoNumbers(5, 9));
console.log(calcAge2(1990));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1990, "Jonas"));

// functions calling other function

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function newFruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces}  pieces of oranges.`;
  return juice;
}

console.log(newFruitProcessor(2, 3));

// reviewing the functions

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const retirementYearLeft = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years.`;
  } else {
    return `Already Retired`;
  }
};

console.log(retirementYearLeft(1970, "Bob"));
