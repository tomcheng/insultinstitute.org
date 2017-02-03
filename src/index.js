import getInsult from "./insults";

const insultContainer = document.getElementById("insult");
const moreButton = document.getElementById("more");

const showInsult = () => {
  insultContainer.innerHTML = getInsult().replace(/\s(?=[^\s]{1,5}$)/g, "&nbsp;").replace(/-/g, "&#8209;");
};

showInsult();

moreButton.addEventListener("click", showInsult);
