"use strict";
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

const init = function () {
  luckyNumber.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
};
init();

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
};
submit.addEventListener("click", passGuess);
//////////////////////////////////////////////////////////////////////////
// LUCKY NUMBER //
if ((content.style.visibility = "visible")) {
  setTimeout(() => {
    luckyNumber.textContent = Math.trunc(Math.random() * 10) + 1;
    luckyNumber.style.opacity = 1;
  }, 10000);
}

btnYes.addEventListener("click", function () {
  document.querySelector(`#lucky-number-text`).textContent =
    "Nice! Let's goooo!";
  btnYes.style.visibility = "hidden";
  btnNo.style.visibility = "hidden";
  btnGoAgain.style.visibility = "visible";
});
btnNo.addEventListener("click", function () {
  const randomNumber = Math.trunc(Math.random() * 10) + 1;
  luckyNumber.textContent = randomNumber;
  document.querySelector(`#lucky-number-text`).textContent =
    "Hm... that is weird. What about this one?";
  btnNo.addEventListener("click", function () {
    document.querySelector(`#lucky-number-text`).textContent =
      "Still no? Well don't give up, keep trying!";
  });
});
/////////////////////////////////////////////////////////////////////////
// GO AGAIN //
btnGoAgain.addEventListener("click", function () {
  document.querySelector(`#lucky-number-text`).textContent =
    "One more round, let's go! Is this your lucky number?";
  luckyNumber.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;
  setTimeout(() => {
    luckyNumber.textContent = Math.trunc(Math.random() * 10) + 1;
    luckyNumber.style.opacity = 1;
  }, 5000);

  btnYes.style.visibility = "visible";
  btnNo.style.visibility = "visible";
  btnGoAgain.style.visibility = "hidden";

  btnNo.addEventListener("click", function () {
    const randomNumber = Math.trunc(Math.random() * 10) + 1;
    luckyNumber.textContent = randomNumber;
    document.querySelector(`#lucky-number-text`).textContent =
      "Hm... that is weird. What about this one?";
    btnNo.addEventListener("click", function () {
      document.querySelector(`#lucky-number-text`).textContent =
        "Still no? Well don't give up, keep trying!";
    });
  });
});
//////////////////////////////////////////////////////////////////
