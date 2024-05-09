// DOM elements
let form = document.querySelector('form')
let inputName = document.querySelector('#first')
let inputSurname = document.querySelector('#last')
let inputEmail = document.querySelector('#email')
let inputBirth = document.querySelector("#birthdate")
let inputQuantity = document.querySelector('#quantity')

let nameErrorMessage = null;
let surnameErrorMessage = null;
let emailErrorMessage = null;
let quantityErrorMessage = null;
let selectedErrorMessage = null;
let checkbox1ErrorMessage = null;
let birthErrorMessage = null;


function createMessageError(message) {
    const errorMessage = document.createElement('span');
    errorMessage.classList.add('error');
    errorMessage.innerText = message;
    return errorMessage;
}

function removeMessageError(errorMessage) {
    if(errorMessage && errorMessage.parentNode) {
        errorMessage.parentNode.removeChild(errorMessage);
    }
}

// Validate name
function validateName(name) {
    if(name.value.trim().length < 2) {
        if(!nameErrorMessage) {
            nameErrorMessage = createMessageError(`Le prénom doit comporter au moins 2 caractères`);
            inputName.parentNode.appendChild(nameErrorMessage);
        }
        return false;
    }
    removeMessageError(nameErrorMessage);
    nameErrorMessage = null;
    return true;
}

// Validate surname
function validateSurname(surname) {
    if(surname.value.trim().length < 2) {
        if(!surnameErrorMessage) {
            surnameErrorMessage = createMessageError(`Le nom doit comporter au moins 2 caractères`);
            inputSurname.parentNode.appendChild(surnameErrorMessage);
        }
        return false;
    }
    removeMessageError(surnameErrorMessage);
    surnameErrorMessage = null;
    return true;
}


// Validate Email form
function validateEmail(email) {
    let regexEmail = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$');
    if(!regexEmail.test(email.value)) {
        if(!emailErrorMessage) {
            emailErrorMessage = createMessageError(`L'adresse email n'est pas valide`)
            inputEmail.parentNode.appendChild(emailErrorMessage)
        }
        return false
    }
    removeMessageError(emailErrorMessage);
    emailErrorMessage = null;
    return true;
}

function validateDateOfBirth(birth) {
    if(birth.value !== '') {
        removeMessageError(birthErrorMessage)
        birthErrorMessage = null
        return true
    } else {
        if(!birthErrorMessage) {
            birthErrorMessage = createMessageError(`Vous devez entrer votre date de naissance.`)
            inputBirth.parentNode.appendChild(birthErrorMessage)
        }
        return false
    }
}

//Validate quantity form
function validateQuantity(quantity) {
    let regexNumber = /^\d+$/;
    if(!regexNumber.test(quantity.value)) {
        if(!quantityErrorMessage) {
            quantityErrorMessage = createMessageError(`Vous devez saisir un nombre`)
            inputQuantity.parentNode.appendChild(quantityErrorMessage)
        }
    return false
    }
    removeMessageError(quantityErrorMessage)
    quantityErrorMessage = null
    return true
}

//Validate selected option form
    function validateSelectedOption(selected) {
        let inputSelectedErrorSpan = document.querySelector('input[name="location"]')
        if(selected) {
            console.log(selected.value);
            removeMessageError(selectedErrorMessage)
            selectedErrorMessage = null
            return true;
        }
        else {
            if(!selectedErrorMessage) {
                selectedErrorMessage = createMessageError(`Vous devez saisir une entrée`)
                inputSelectedErrorSpan.parentNode.appendChild(selectedErrorMessage)
            }
            return false;
        }
    }

//Validate checkbox check form
function validateCheckbox(checkbox) {
    let checkbox1ErrorSpan  = document.querySelector('#checkbox1')
    if(checkbox) {
        removeMessageError(checkbox1ErrorMessage)
        checkbox1ErrorMessage = null
        return true
    } else {
        if(!checkbox1ErrorMessage) {
            checkbox1ErrorMessage = createMessageError(`Vous devez vérifier que vous acceptez les termes et conditions.`)
            checkbox1ErrorSpan .parentNode.appendChild(checkbox1ErrorMessage)
        }
        return false
    }
}

// Recover checkbox2 check
function validateCheckbox2(checkbox) {
    if(checkbox) {
        console.log("check 2 valid")
        return
    } else {
        console.log("no check 2 invalid")
        return
    }
}

// Tous les champs de validation du formulaire
function Validate() {
    let inputSelectedOption = document.querySelector('input[name="location"]:checked')
    let checkbox1 = document.querySelector('#checkbox1').checked
    let checkbox2 = document.querySelector('#checkbox2').checked
    
    let isNameValid = validateName(inputName);
    let isSurnameValid = validateSurname(inputSurname);
    let isEmailValid = validateEmail(inputEmail);
    let isDateOfBirthValid = validateDateOfBirth(inputBirth);
    let isQuantityValid = validateQuantity(inputQuantity);
    let isSelectedOptionValid = validateSelectedOption(inputSelectedOption);
    let isCheckbox1Valid = validateCheckbox(checkbox1);
    let isCheckbox2Valid = validateCheckbox2(checkbox2);

    if(isNameValid && isSurnameValid && isEmailValid && isDateOfBirthValid && isQuantityValid && isSelectedOptionValid && isCheckbox1Valid) {
        alert('formulaire envoyé');
    } else {
        console.log('formulaire non envoyé')
    }
}

//Ecouter event form submit
form.addEventListener('submit', (event)=> {
    event.preventDefault()
    Validate()
})