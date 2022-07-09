function getRandomHexColor() {
  console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector("body")
console.log(body)

button.addEventListener("click", changeColor)

function changeColor () {
  const RandomHexColor = getRandomHexColor();
  color.textContent = RandomHexColor;
  body.style.backgroundColor = RandomHexColor;

}



