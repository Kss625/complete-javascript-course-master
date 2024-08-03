// #1

let markMass = 95; // in kg
let markHeight = 1.88; // in meters

let johnMass = 85; // in kg
let johnHeight = 1.76; // in meters

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log(markHigherBMI);

// #2

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's(${johnBMI})!`);
} else {
  console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`);
}

// #3

const koalasScores = [109, 95, 106];
const dolphinsScores = [97, 112, 101];

let totalScoreKoalas = 0;
let totalScoreDolphins = 0;

for (let i = 0; i < 3; i++) {
  totalScoreKoalas += koalasScores[i];
  totalScoreDolphins += dolphinsScores[i];
}

const avgScoreKoalas = totalScoreKoalas / koalasScores.length;
const avgScoreDolphins = totalScoreDolphins / dolphinsScores.length;

if (avgScoreKoalas === avgScoreDolphins) {
  console.log("Draw");
} else if (avgScoreDolphins > avgScoreKoalas) {
  console.log(`Dolphins wins the game`);
} else {
  console.log(`Koalas wins the game`);
}

// bonus 1

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
  console.log("Dolphins Wins the game");
} else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
  console.log("Koalas wins the game");
} else {
  console.log("You both loose the game");
}

// bonus 2
if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
  console.log("Dolphins Wins the game");
} else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
  console.log("Koalas wins the game");
} else if (
  avgScoreDolphins === avgScoreKoalas &&
  avgScoreDolphins >= 100 &&
  avgScoreKoalas >= 100
) {
  console.log("Draw The game");
} else {
  console.log("You both loose the game");
}

// #4

const billValue = 400;
const tip = billValue >= 50 && billValue <= 300 ? (billValue * 15) / 100 : (billValue / 5);

console.log(`The bill was ${billValue}, the tip wase ${tip} and the total value is ${billValue + tip}`);
