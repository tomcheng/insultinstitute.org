import getInsult from "./insults";

const insultContainer = document.getElementById("insult");
const moreButton = document.getElementById("more");

const BUTTON_TEXTS = [
  "Show Me Another Insult",
  "I Needs It",
  "Hit Me Again",
  "Again!",
  "More!",
  "Give It To Me",
  "Tell Me More",
];

let buttonIndex = 0;

const showInsult = () => {
  insultContainer.textContent = getInsult();
  moreButton.textContent = BUTTON_TEXTS[buttonIndex % BUTTON_TEXTS.length];
  buttonIndex++;
};

showInsult();

moreButton.addEventListener("click", showInsult);
