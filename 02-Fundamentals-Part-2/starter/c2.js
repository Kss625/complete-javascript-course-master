// #1

// const calcAverage = (n1, n2, n3) => (n1 + n2 + n3) / 3;

// const scoreKoalas = calcAverage(23, 34, 27); // score1
// const scoreDolphins = calcAverage(85, 54, 41); // score2

// const checkWinner = (score1, score2) => {
//   if (score1 >= 2 * score2) return `Koalas win 🏆(${score1} vs. ${score2})`;
//   else if (score2 >= 2 * score1)
//     return `Dolphins win 🏆 (${score2} vs. ${score1})`;
//   else return `No one win the trophy`;
// };

// console.log(checkWinner(scoreKoalas, scoreDolphins));

// #2

const calcTip = (bill) => {
  let myTip = 0;
  if (bill >= 50 && bill <= 300) myTip = (bill * 15) / 100;
  else myTip = bill / 5;
  return myTip;
};

const bills = [450, 100, 150, 60, 26];
const tips = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}
console.log(bills);
console.log(tips);

const total = [];

for (let i = 0; i < bills.length; i++) {
  total.push(bills[i] + tips[i]);
}

console.log(total);

// #3

const markObject = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  bmiValue: 0,
  calcBMI: function () {
    this.bmiValue = this.mass / this.height ** 2;
    return this.bmiValue;
  },
};
const johnObject = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  bmiValue: 0,
  calcBMI: function () {
    this.bmiValue = this.mass / this.height ** 2;
    return this.bmiValue;
  },
};

const markBMI = markObject.calcBMI();
const johnBMI = johnObject.calcBMI();

if (johnBMI > markBMI) {
  console.log(`John's BMI(${johnBMI} is higher than Mark's(${markBMI})!`);
} else if (johnBMI < markBMI) {
  console.log(`Mark's BMI(${markBMI} is higher than John's(${johnBMI})!`);
} else {
  console.log(`Both John and Mark Have Same BMI(${johnBMI})`);
}

// #4-already do with for loop in Coding Challenge #2

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(total));
