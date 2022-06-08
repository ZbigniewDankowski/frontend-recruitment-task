const messageAlert = document.querySelector(".alert");
const alertButton = document.querySelector(".close-btn");
const clickButton = document.querySelector(".main-button");
const resetButton = document.querySelector(".reset-button");
const content = document.querySelector(".main");
const clickCounterText = document.querySelector(".number");

let alertIsActive = false;
const setNumberInStorage = (number) => {
  window.localStorage.setItem("clicks", number);
};
clickNumber =
  localStorage.length > 0 ? window.localStorage.getItem("clicks") : 0;

const setClickCounterText = () => {
  clickNumber = window.localStorage.getItem("clicks");
  clickCounterText.textContent =
    clickNumber == 1 ? `${clickNumber} time ` : `${clickNumber} times `;
};
const showAlert = () => {
  messageAlert.classList.remove("hidden");
  content.classList.add("alert-active");
};
const hideAlert = () => {
  messageAlert.classList.add("hidden");
  content.classList.remove("alert-active");
};
resetButton.addEventListener("click", () => {
  setNumberInStorage(0);
  setClickCounterText();
  resetButton.classList.add("hidden");
});

clickButton.addEventListener("click", () => {
  if (alertIsActive == false) {
    clickNumber++;
    if (clickNumber >= 5) {
      resetButton.classList.remove("hidden");
    }
    setNumberInStorage(clickNumber);
    setClickCounterText();
    showAlert();
    alertIsActive = true;
  } else return;
});
window.addEventListener("click", (e) => {
  if (alertIsActive && !e.target.classList.contains("alert-item")) {
    hideAlert();
    alertIsActive = false;
  } else return;
});
