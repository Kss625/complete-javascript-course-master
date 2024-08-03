'use strict';

// selecting the elements
/*
console.log(document.querySelector('.message')); // selecting an element
console.log(document.querySelector('.message').textContent); // getting a text content of Element

document.querySelector('.message').textContent = '🎉Correct Number!'; // changing the content of html element

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 15;// set the value of input field
*/
// handling click events

// let secretNumber = parseInt(Math.random() * 20 + 1);

// let score = 20;
// let highScore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   if (!guess) {
//     // when there is no input
//     // we avoiding the falsy values
//     displayMessage('No  Number');
//   } else if (guess === secretNumber) {
//     displayMessage('Correct Number!');

//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       displayMessage('You Loss The Game...');
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// refractoring the lower code in above code
// else if (guess > secretNumber) {
//   // when player wins
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too High!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You Loss The Game!';
//     document.querySelector('.score').textContent = 0;
//   }
// } else if (guess < secretNumber) {
//   // when guess is too low
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too Low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     // when guess is too high
//     document.querySelector('.message').textContent = 'You Loss The Game!';
//     document.querySelector('.score').textContent = 0;
//   }
// }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = parseInt(Math.random() * 20 + 1);
//   document.querySelector('body').style.backgroundColor = '#222';
//   displayMessage('Start guessing...');
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = undefined;
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').style.width = '15rem';
// });

/* Doing This Project again */
let checkButton = document.querySelector('.check');

let randomNumber = parseInt(Math.random() * 20 + 1);
let score = 20;

let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function secretNumber(message, width) {
  document.querySelector('.number').textContent = message;
  document.querySelector('.number').style.width = `${width}rem`;
}

function showScore(score) {
  document.querySelector('.score').textContent = score;
}

checkButton.addEventListener('click', function () {
  let guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    displayMessage('Not a Valid Input');
  }

  if (guessNumber === randomNumber) {
    displayMessage('You guessed it right');
    secretNumber(randomNumber, 30);
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
  }
  if (guessNumber !== randomNumber) {
    if (score > 1) {
      displayMessage(`Too ${guessNumber > randomNumber ? 'High' : 'Low'}`);
      score--;
      showScore(score);
    } else {
      displayMessage('You Loss The Game');
      showScore(0);
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

let againButton = document.querySelector('.again');

againButton.addEventListener('click', function () {
  score = 20;
  randomNumber = parseInt(Math.random() * 20 + 1);
  displayMessage('Start guessing');
  document.querySelector('.guess').value = undefined;
  secretNumber('?', 15);
  document.querySelector('body').style.backgroundColor = '#222';

  showScore(score);
});
