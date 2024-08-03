// function

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry("India", 125, "New Delhi");
const country2 = describeCountry("Nepal", 35, "KathMandu");
const country3 = describeCountry("Finland", 6, "Helsinki");

console.log(country1);
console.log(country2);
console.log(country3);

// function declaration and expressions

const percentageOfWorld1 = function (population) {
  return population / 79;
};

const firstCountry = percentageOfWorld1(1441);
const secondCountry = percentageOfWorld1(350);
const thirdountry = percentageOfWorld1(6);

console.log(firstCountry, secondCountry, thirdountry);

// arrow functions

const percentageOfWorld3 = (population) => population / 79;
const countryOne = percentageOfWorld3(1441);
console.log(countryOne);

// functions calling other functions

const describePopulation = (country, population) => {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )} % of the world.`;
};

console.log(describePopulation("China", 1441));
console.log(describePopulation("India", 1451));
console.log(describePopulation("Nepal", 35));

// Introduction to Arrays

const populations = [144, 125, 90, 67];

if (populations.length === 4) console.log(true);
else console.log(false);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

// Basic arrays methods

const neighbours = ["Nepal", "Sri Lanka", "Bhutan", "Afghanistan"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany")) {
  console.log("It is European Country :D");
} else {
  console.log("Probably not a central European Country :D");
}

neighbours[neighbours.indexOf("Afghanistan")] = "Pakistan";
console.log(neighbours);

// objects

const myCountry = {
  country: "INDIA",
  capital: "New Delhi",
  language: "Hindi",
  population: 125,
  neighbours: ["Nepal", "Sri Lanka", "Bhutan"],
  describe: function () {
    console.log(
      `${this.capital} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland: function () {
    if (this.neighbours.length == 0) {
      myCountry["isIsland"] = true;
    } else {
      myCountry["isIsland"] = false;
    }
  },
};

console.log(myCountry);

// dot vs bracket notation

console.log(
  `${myCountry.capital} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

// object methods

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);
