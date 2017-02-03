import getInsult from "./insults";

const insultContainer = document.getElementById("insult");
const moreButton = document.getElementById("more");

const showInsult = () => {
  insultContainer.textContent = getInsult();
};

showInsult();

moreButton.addEventListener("click", showInsult);
