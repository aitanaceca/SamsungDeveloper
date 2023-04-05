const emailRegex = new RegExp("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$");
const emptyError = "Rellene este campo.";
const invalidNameError = "Debes introducir un nombre válido.";
const invalidEmailError = "Email inválido.";
const invalidPasswordError = "La contraseña tiene que tener mínimo 8 carácteres.";
const notEqualPasswordsError = "Las contraseñas no coinciden.";

function showErrorMessagge(fieldId, errorMessage) {
    let input = document.getElementById(fieldId).style;
    let error = document.querySelector('#' + fieldId + 'OnError');
    let brElement = document.querySelector('#' + fieldId + 'Br');
    input.borderStyle = 'solid';
    input.borderColor = 'red';
    input.borderWidth = '3px';
    input.background = "url('./images/error-icon.svg') no-repeat scroll 10px 10px";
    input.backgroundPosition = '395px center';
    input.backgroundColor = 'white';
    error.innerHTML = errorMessage;
    error.style.display = 'block';
    brElement.style.display = 'none';
}

function hideErrorMessage(fieldId) {
    let input = document.getElementById(fieldId).style;
    let error = document.querySelector('#' + fieldId + 'OnError');
    let brElement = document.querySelector('#' + fieldId + 'Br');
    input.borderStyle = 'solid';
    input.borderColor = 'chartreuse';
    input.borderWidth = '3px';
    input.background = "url('./images/success-icon.svg') no-repeat scroll 10px 10px";
    input.backgroundPosition = '395px center';
    input.backgroundColor = 'white';
    error.style.display = 'none';
    brElement.style.display = 'block';
}

function checkNameIsValid(nameInput) {
    let valid = true;
    if (nameInput.length === 0) {
        showErrorMessagge("name", emptyError);
        valid = false;
    }
    if (nameInput.length > 0 && !isNaN(nameInput)) {
        showErrorMessagge("name", invalidNameError);
        valid = false
    }
    if (valid === true) {
        hideErrorMessage("name");
    }

    return valid;
}

function checkEmailIsValid(emailInput) {
    let valid = true;
    if (emailInput.length === 0) {
        showErrorMessagge("email", emptyError);
        valid = false;
    }
    if (emailInput.length > 0 && !emailRegex.test(emailInput)) {
        showErrorMessagge("email", invalidEmailError);
        valid =  false;
    }
    if (valid === true) {
        hideErrorMessage("email");
    }

    return valid;
}

function checkPasswordsAreValid(pwdInput, confirmPwdInput) {
    let valid = true;
    if (pwdInput.length === 0) {
        showErrorMessagge("pwd", emptyError);
        valid = false;
    }
    if (confirmPwdInput.length === 0) {
        showErrorMessagge("confirmPwd", emptyError);
        valid = false;
    }
    if (pwdInput.length > 0 && pwdInput.length < 8) {
        showErrorMessagge("pwd", invalidPasswordError);
        valid = false;
    }
    if (pwdInput.length > 0 && pwdInput.length > 7 && confirmPwdInput.length === 0 && pwdInput !== confirmPwdInput) {
        showErrorMessagge("pwd", notEqualPasswordsError);
        showErrorMessagge("confirmPwd", emptyError);
        valid = false;
    }
    if (pwdInput.length === 0 && confirmPwdInput.length > 0 && pwdInput !== confirmPwdInput) {
        showErrorMessagge("pwd", emptyError);
        showErrorMessagge("confirmPwd", notEqualPasswordsError);
        valid = false;
    }
    if (pwdInput.length > 0 && confirmPwdInput.length > 0 && pwdInput !== confirmPwdInput) {
        showErrorMessagge("pwd", notEqualPasswordsError);
        showErrorMessagge("confirmPwd", notEqualPasswordsError);
        valid = false;
    }
    if (valid === true) {
        hideErrorMessage("pwd");
        hideErrorMessage("confirmPwd");
    }

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

    if (isValidName === true && isValidEmail === true && areValidPasswords === true) submitForm();
}
