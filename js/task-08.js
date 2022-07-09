const form = document.querySelector('.login-form');

form.addEventListener("submit", validationInput);

function validationInput (event) {
    event.preventDefault();
    const { email, password } = event.target;
    const formData = {email: email.value, password: password.value};
    if (email.value === "" || password.value === ""){
        alert("Please fill in the empty fields!")
    }
    else
    console.log(formData);
    form.reset();
}
