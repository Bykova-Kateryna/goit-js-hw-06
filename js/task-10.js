function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberOfBoxes = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");


buttonCreate.addEventListener("click", createBoxes)
buttonDestroy.addEventListener("click", destroyBoxes)

let height = 20;
let width = 20;

function createBoxes(amount){
  amount = numberOfBoxes.value;
  const newBoxes = [];
  for (let i = 0; i < amount; i += 1){
    const newElement = `<div style = " border: 2px solid #212121; height: ${height+=10}px; width: ${width+=10}px; background-color: ${getRandomHexColor()}"></div>`
    
    newBoxes.push(newElement)
  }

  boxes.insertAdjacentHTML("afterbegin", newBoxes.join(""))
}

function destroyBoxes() {
  boxes.innerHTML = '<div id="boxes"></div>';
}