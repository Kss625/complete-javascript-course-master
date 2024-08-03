// Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

// const x = 23;

// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;

// // console.log(); // just press cl gives console.log --> user snippet

// console.log(calcAge(1991));

// const temperature = [-3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  let maxTemp = 0;
  let minTemp = 0;

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > maxTemp) maxTemp = temps[i];
    if (temps[i] < minTemp) minTemp = temps[i];
  }
  console.log(maxTemp, minTemp);
  return maxTemp - minTemp;
};

console.log(calcTempAmplitude([3, 1, 9, 0], [2, -9, -10, 5]));

// debugging

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // c) fix the error
    // value: prompt('Degree Celsius:'),
    value: 10,
  };
  // b) finding the error
  console.log(measurement);
  //   console.log(measurement.value);
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// a) identifying the bug

console.log(measureKelvin());
