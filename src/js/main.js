const messageAlert = document.querySelector(".alert");
const alertButton = document.querySelector(".close-btn");
const clickButton = document.querySelector(".main-button");
const resetButton = document.querySelector(".reset-button");
const content = document.querySelector(".main");
const clickCounterText = document.querySelector(".number");

//flag for check alert active
let alertIsActive = false;

//save clicks in local storage
const setNumberInStorage = (number) => {
  window.localStorage.setItem("clicks", number);
};
clickNumber =
  localStorage.length > 0 ? window.localStorage.getItem("clicks") : 0;

//set text in alert with number of clicks
const setClickCounterText = () => {
  clickNumber = window.localStorage.getItem("clicks");
  clickCounterText.textContent =
    clickNumber == 1 ? `${clickNumber} time ` : `${clickNumber} times `;
};

//show alert and set opacity on section
const showAlert = () => {
  messageAlert.classList.remove("hidden");
  content.classList.add("alert-active");
};

// hide alert and remove class with opacity
const hideAlert = () => {
  messageAlert.classList.add("hidden");
  content.classList.remove("alert-active");
};

//reset click in local storage and text in alert
resetButton.addEventListener("click", () => {
  setNumberInStorage(0);
  setClickCounterText();
  resetButton.classList.add("hidden");
});

//add clicks to local storage number for every click on button and showing alert if is hidden
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

//listen for every click on elements except alert elements with special class alert-item and hide alert if conditionals are true
window.addEventListener("click", (e) => {
  if (alertIsActive && !e.target.classList.contains("alert-item")) {
    hideAlert();
    alertIsActive = false;
  } else return;
});
