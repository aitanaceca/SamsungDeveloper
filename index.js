const emailRegex = new RegExp("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$");

function showErrorMessagge(fieldId, errorMessage) {
    let input = document.getElementById(fieldId);
    let error = document.querySelector('#' + fieldId + 'OnError');
    let brElement = document.querySelector('#' + fieldId + 'Br');
    input.style.borderStyle = 'solid';
    input.style.borderColor = 'red';
    input.style.borderWidth = '3px';
    input.style.background = "url('./images/error-icon.svg') no-repeat scroll 10px 10px";
    input.style.backgroundPosition = '395px center';
    input.style.backgroundColor = 'white';
    error.innerHTML = errorMessage;
    error.style.display = 'block';
    brElement.style.display = 'none';
}

function hideErrorMessage(fieldId) {
    let input = document.getElementById(fieldId);
    let error = document.querySelector('#' + fieldId + 'OnError');
    let brElement = document.querySelector('#' + fieldId + 'Br');
    console.log(brElement)
    input.style.borderStyle = 'solid';
    input.style.borderColor = 'chartreuse';
    input.style.borderWidth = '3px';
    input.style.background = "url('./images/success-icon.svg') no-repeat scroll 10px 10px";
    input.style.backgroundPosition = '395px center';
    input.style.backgroundColor = 'white';
    error.style.display = 'none';
    brElement.style.display = 'block';
}

function checkNameIsValid(nameInput) {
    let valid = true;
    if (nameInput.length === 0) {
        showErrorMessagge("name", "Rellene este campo.");
        valid = false;
    }
    if (nameInput.length > 0 && !isNaN(nameInput)) {
        showErrorMessagge("name", "Debes introducir un nombre válido.");
        valid = false
    }
    if (valid === true) {
        hideErrorMessage("name");
    }

    console.log(valid);
    return valid;
}

function checkEmailIsValid(emailInput) {
    let valid = true;
    if (emailInput.length === 0) {
        showErrorMessagge("email", "Rellene este campo.");
        valid = false;
    }
    if (emailInput.length > 0 && !emailRegex.test(emailInput)) {
        showErrorMessagge("email", "Email inválido.");
        valid =  false;
    }
    if (valid === true) {
        hideErrorMessage("email");
    }

    console.log(valid);
    return valid;
}

function checkPasswordsAreValid(pwdInput, confirmPwdInput) {
    let valid = true;
    if (pwdInput.length === 0) {
        showErrorMessagge("pwd", "Rellene este campo.");
        valid = false;
    }
    if (confirmPwdInput.length === 0) {
        showErrorMessagge("confirmPwd", "Rellene este campo.");
        valid = false;
    }
    if (pwdInput.length > 0 && confirmPwdInput.length > 0 && pwdInput !== confirmPwdInput) {
        showErrorMessagge("pwd", "Las contraseñas no coinciden.");
        showErrorMessagge("confirmPwd", "Las contraseñas no coinciden.");
        valid = false;
    }
    if (pwdInput.length < 8) {
        showErrorMessagge("pwd", "La contraseña tiene que tener mínimo 8 carácteres.");
        valid = false;
    }
    if (confirmPwdInput.length < 8) {
        showErrorMessagge("confirmPwd", "La contraseña tiene que tener mínimo 8 carácteres.");
        valid = false;
    }
    if (valid === true) {
        hideErrorMessage("pwd");
        hideErrorMessage("confirmPwd");
    }
    console.log(valid);
    return valid;
}

function submitForm() {
    window.alert("SE HA CREADO EL USUARIO CORRECTAMENTE.");
}

function checkFormIsValid() {
    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;
    const pwdInput = document.getElementById("pwd").value;
    const confirmPwdInput = document.getElementById("confirmPwd").value;

    const isValidName = checkNameIsValid(nameInput);
    const isValidEmail = checkEmailIsValid(emailInput);
    const areValidPasswords = checkPasswordsAreValid(pwdInput, confirmPwdInput);

    console.log(isValidEmail, isValidName, areValidPasswords)
    if (isValidName === isValidEmail === areValidPasswords === true) submitForm();
}
