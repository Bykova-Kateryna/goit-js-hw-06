const input = document.querySelector('#font-size-control');
const text = document.querySelector('span');

input.addEventListener('change', changeStyleForText)

function changeStyleForText () {
    text.style.fontSize = `${input.value}px`;
}