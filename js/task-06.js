const validationInput = document.querySelector('#validation-input');
const validationLength = Number(validationInput.dataset.length);

validationInput.addEventListener('blur', validationColor)

function validationColor () {
    if (validationInput.value.length === validationLength){
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    }
    else {validationInput.classList.add('invalid');
          validationInput.classList.remove('valid');
        }
    return
}