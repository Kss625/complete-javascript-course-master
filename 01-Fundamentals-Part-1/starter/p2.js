/* Basic Operators */

// Arithmetic Operators

const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 means 2 ki power 3

const firstName = "Jonas";
const lastName = "Mann";
console.log(firstName + " " + lastName);

// Assignment Operators

let x = 10 + 5; // = is assignment operator
x += 10; // x= x+10 = 25
x *= 4; // x=x*4=100
x++; // x= x+1=101
x--; // x= x-1 = 100
console.log(x);

// Comparison Operators-     >,<,<=,>=

console.log(ageJonas > ageSarah); // 46>19
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

let a, b;
a = b = 25 - 10 - 5; // a = b = 10
console.log(a, b);

const averageAge = (ageSarah + ageJonas) / 2;
console.log(averageAge);

// template strings

const fName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const description = `I'm ${fName}, a ${year - birthYear} years old ${job}!`;

console.log(description);
console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);

// conditional statements

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`You are Eligible for Driving license.`);
} else {
  console.log(`You are not eligible for Driving license.`);
  console.log(`Wait for ${18 - age} Years!`);
}

// type conversion and coercion

const inputYear = "1991";

console.log(inputYear + 18); // string
console.log(Number(inputYear) + 18); // number

console.log(Number("1Jonas"), typeof NaN); //NaN
console.log(String(23) + "18");

// type coercion

console.log("I am " + 23 + " years old"); // num to string
console.log("23" - "10" - 3); // str to num
console.log("23" * "2", "23" * 2, "23" / "2");
console.log(2 + 3 + 4 + "5");

// 5 falsy values: 0,'',undefined,null,NaN also false obviously
// everything else above is called truthy value

console.log(Boolean(0), Boolean(1), Boolean(-1));
console.log(Boolean("Jonas"), Boolean(""));
console.log(Boolean({})); // truthy values

const money = 100;

if (money) {
  console.log("You Have Money");
} else {
  console.log("You Don't Have Money");
}

let height;

if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is not defined");
}

// equality operators: == vs ===

// const myAge = "18";
// if (myAge === 18) console.log("You just beccome an adult :D");
// if (myAge == 18) console.log("You just beccome an adult :D(loose)");
// console.log(18 == "18", 18 === "18");
// const favNumber = Number(prompt("What's Your Favorite Number?"));
// console.log(favNumber, typeof favNumber);
// if (favNumber === 23)
//   console.log("Cool! 23 is an amazing number!"); //23 === 23 -> true
// else if (favNumber === 7) console.log("7 is also a cool number");
// else if (favNumber === 9) console.log("9 is also a cool number");
// else console.log("Number is not 23 or 7");
// if (favNumber !== 23) console.log("Why not 23?");

// logical Operators

const hasDriversLicense = true;
// const hasGoodVision = false;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("You Can Drive!");
// } else {
//   console.log("You Can not Drive right now..");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("You Can Drive!");
} else {
  console.log("You Can not Drive right now..");
}

// switch statement

const day = "thursday";

switch (day) {
  case "monday":
    console.log("Plan Course Structure");
    console.log("Go to Coding MeetUp");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write Code Examples");
    break;
  case "friday":
    console.log("Record Videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy The Weekend :D");
    break;
  default:
    console.log("Not a Valid Day");
}

// statements(bigger piece of code which executed but don't give value) and expressions(piece of code which produce a value)

// ternary/conditional operator

const currentAge = 23;
currentAge >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = currentAge >= 18 ? "Wine" : "Water";
console.log(`I like to drink ${drink}`);
