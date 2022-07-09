const nameOutput = document.querySelector('#name-output');
const input = document.querySelector('#name-input');

input.addEventListener('input', inputNameChange)
console.log(input.textContent)
function inputNameChange(event) {
    if (event.currentTarget.value === ''){
        nameOutput.textContent = 'Anonymous';
    } 
    else nameOutput.textContent = event.currentTarget.value;
}