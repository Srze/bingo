"use strict";
// GLOBAL VARIABLES//
const ok = document.querySelector("#ok");
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const welcomeScreen = document.querySelector("#welcome-screen");
const welcomeMessage = document.querySelector("#welcome-message");
const content = document.querySelector("#content");
const luckyNumber = document.querySelector("#lucky-number");
const btnYes = document.querySelector("#btnYes");
const btnNo = document.querySelector("#btnNo");
const btnGoAgain = document.querySelector("#go-again");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// HELPER FUNCTIONS //
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const btnNoFunction = function () {
  if (numbers.length >= 9)
    document.querySelector(`#lucky-number-text`).textContent =
      "Hm... that is weird. What about this one?";
  if (numbers.length < 9)
    document.querySelector(`#lucky-number-text`).textContent =
      "Still no? Well don't give up, keep trying!";

  luckyNumber.textContent = numbers[0];
  numbers.shift();
};

const goAgainFunction = function () {
  document.querySelector(`#lucky-number-text`).textContent =
    "One more round, let's go! Is this your lucky number?";
  luckyNumber.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;
  numbers = "";
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  shuffleArray(numbers);
  btnYes.style.visibility = "hidden";
  btnNo.style.visibility = "hidden";
  setTimeout(() => {
    luckyNumber.textContent = numbers[0];
    numbers.shift();
    luckyNumber.style.opacity = 1;

    btnYes.style.visibility = "visible";
    btnNo.style.visibility = "visible";
  }, 5000);

  btnGoAgain.style.visibility = "hidden";
};

// PASSWORD GUESS//
const passGuess = function (e) {
  e.preventDefault();
  const guess = input.value;
  if (guess === "bingo") {
    (welcomeScreen.style.visibility = "hidden"),
      (welcomeMessage.style.visibility = "visible");
    setTimeout(() => {
      welcomeMessage.style.visibility = "hidden";
      content.style.cssText = "visibility: visible !important";
    }, 2000);
  } else {
    return alert("TRY AGAIN...");
  }

  btnYes.style.visibility = "hidden";
  btnNo.style.visibility = "hidden";
  // LUCKY NUMBER //
  if ((content.style.visibility = "visible")) {
    setTimeout(() => {
      luckyNumber.textContent = numbers[0];
      numbers.shift();
      luckyNumber.style.opacity = 1;

      btnYes.style.visibility = "visible";
      btnNo.style.visibility = "visible";
    }, 5000);
  }

  console.log(luckyNumber.textContent, numbers);
};
submit.addEventListener("click", passGuess);
//////////////////////////////////////////////////////////////////////////

// BUTTON YES //
btnYes.addEventListener("click", function () {
  document.querySelector(`#lucky-number-text`).textContent =
    "Bingo! Let's goooo!";
  btnYes.style.visibility = "hidden";
  btnNo.style.visibility = "hidden";
  btnGoAgain.style.visibility = "visible";

  console.log(luckyNumber.textContent, numbers);
});

// BUTTON NO //
// const btnNoFunction = function () {
//   const randomNumber = Math.trunc(Math.random() * numbers.length) + 1;
//   numbers.push(randomNumber);
//   luckyNumber.textContent = randomNumber;
//   document.querySelector(`#lucky-number-text`).textContent =
//     "Hm... that is weird. What about this one?";
//   btnNo.addEventListener("click", function () {
//     document.querySelector(`#lucky-number-text`).textContent =
//       "Still no? Well don't give up, keep trying!";
//   });
// };

btnNo.addEventListener("click", function () {
  btnNoFunction();
  if (numbers.length < 1) {
    numbers = "";
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    shuffleArray(numbers);
    luckyNumber.textContent = numbers[0];
    numbers.shift();
  }

  console.log(luckyNumber.textContent, numbers);
});

/////////////////////////////////////////////////////////////////////////
// GO AGAIN //
btnGoAgain.addEventListener("click", goAgainFunction);

//////////////////////////////////////////////////////////////////
const init = function () {
  luckyNumber.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
  shuffleArray(numbers);

  console.log(luckyNumber.textContent, numbers);
};

init();
