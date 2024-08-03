// Doing Some cool stuffs with JS

console.log("Hello World!");

let js = "amazing";

// if (js === "amazing") alert("JavaScript is FUN!");

// console.log(45 + 56 + 90 - 45 + 1);

/*
Values and Variables

Variables Naming  Rule:-
1. Variables name should contains alphabets,integers and special characters(underscore and dollar sign)
2. first letter should not start with integers.
3. camelCase will be preferred while naming variables.
4. JS reserved keywords are not allowed.
5. capital letters are not preferrable in first digit as JS is object oriented based.

*/

console.log("Jonas");
console.log(123);
console.log(67 + 90 - 34 * 2 + 2);

let firstName = "Jonas";

// using the variable
console.log(firstName);

// changing the variable values

firstName = "Bob";

console.log(firstName);

/*
Data Types in 
-> use typeof keyword for check data types of variables
*/

// 7 primitive data types

let age = 23; // number
let cityName = "New Delhi"; //string
let isAdult = true; // boolean
let children; // undefined

let bankBalance = null; // null
let logo = Symbol("Coding is Fun"); //symbol
let bigNum = 123457n; //BigInt

console.log(
  age,
  typeof age,
  cityName,
  typeof cityName,
  isAdult,
  typeof isAdult,
  children,
  typeof children,
  bankBalance,
  typeof bankBalance,
  logo,
  typeof logo,
  bigNum,
  typeof bigNum
);

children = "Yes"; // changing the data type-dynamic programming

console.log(children, typeof children);

/* 
let,const and var
-> let and const cannot be re-declared.
-> the values of var and let can be changed but cannot do with const keyword
-> Empty const variables are not allowed but can be done with let and var.
-> let is block-scoped while var is function scoped.
*/

let childAge = 15;

childAge = 16;

var oldAge = 67;

var oldAge = 76;

console.log(childAge, oldAge);

const pi = 3.1428;

// pi=22/7 gives error

console.log(pi);
