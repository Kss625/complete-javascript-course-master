// iteration the for loop

// for loop keeeps running while condition is True

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repitition ${rep}`);
// }

// loops in arrays
const jonas = [
  "Michael",
  "Stark",
  2037 - 1991,
  ["Peter", "John", "Chris"],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(`my friend is ${jonas[i]}`);
  //   types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log(`--- only strings ---`);
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log(`--- break with numbers ---`);
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}

// looping backwards and loop in loop

for (let j = jonas.length - 1; j >= 0; j--) {
  console.log(j, jonas[j]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`----- Starting Exercise ${exercise}`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repitition ${rep} 🐦‍🔥`);
  }
}

// The while loop

console.log(`----- While Loop -----`);
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repitition ${rep}`);
  rep++;
}

let dice = parseInt(Math.random() * 6 + 1);

if (dice === 6) console.log(`You rolled a ${dice}`);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = parseInt(Math.random() * 6 + 1);
  if (dice === 6) console.log("Loop is about to End...");
}
