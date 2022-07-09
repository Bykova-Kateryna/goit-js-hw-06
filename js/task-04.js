const counter = document.querySelector('#counter')
let counterValue = 0;
const decrementBtn = counter.querySelector('button[data-action="decrement"]');
const incrementBtn = counter.querySelector('button[data-action="increment"]');
const value = counter.querySelector('#value');
decrementBtn.addEventListener('click', clickDecrementBtn);
incrementBtn.addEventListener('click', clickIncrementBtn);


function clickIncrementBtn () {
     counterValue = counterValue + 1;
     value.textContent = counterValue;
};

function clickDecrementBtn () {
    counterValue = counterValue - 1;
    value.textContent = counterValue;
};