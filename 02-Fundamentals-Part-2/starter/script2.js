// Arrays in JavaScript

const friends = ["Michael", "Steven", "Peter"]; // way-1
console.log(friends);

const years = new Array(1991, 1995, 2008, 2020); // way-2
console.log(years);

console.log(friends[0]); // accessing the elements

console.log(friends.length); // gives total number of array
console.log(friends[friends.length - 1]); // last element

friends[2] = "Jay"; // we can't be replaces entire array but can be change the values of elements present in arrays
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schedtmann", 2037 - 1991, friends];
console.log(jonas);
console.log(jonas.length);

// Operations on Arrays

// -> adding the elements
friends.push("Maya"); // add element at end of an arrays
console.log(friends);

friends.unshift("John"); // add element at start of an arrays
console.log(friends);

// -> remove the elements
const popped = friends.pop(); // remove element at end of an arrays
console.log(friends);
console.log(popped);

friends.shift(); // remove element at start of an arrays
console.log(friends);

// -> tell index of element
console.log(friends.indexOf("Michael")); // if not present then returns -1

console.log(friends.includes("Steven")); // check element exists or not

// objects-data structure

const jonas1 = {
  firstName: "John",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
};

// -> dot vs bracket notation

console.log(jonas1);
console.log(jonas1.lastName);
console.log(jonas1["lastName"]);

// const nameKey = prompt(
//   "What do you want to know about Jonas?Choose between firstName,lastName,age,job and friends"
// ); // diff b|w dot and bracket notation
// console.log(jonas1.nameKey); gives undefined as no key of name nameKey is present in jonas1

// if (jonas1[nameKey]) {
//   console.log(jonas1[nameKey]);
// } else {
//   console.log("Wrong Request!");
// }

jonas1.location = "Portugal";
jonas1["twitter"] = "@jonasschmedtmann";

console.log(jonas1);

console.log(
  `${jonas1.firstName} has ${jonas1.friends.length} friends, and his best friends is called ${jonas1.friends[1]}.`
);

// --> objects methods

const jonas2 = {
  firstName: "John",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};

console.log(jonas2.calcAge());
console.log(jonas2["calcAge"]());

console.log(jonas2.age);
