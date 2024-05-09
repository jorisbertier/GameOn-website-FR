// DOM elements
let form = document.querySelector('form')
let inputName = document.querySelector('#first')
let inputSurname = document.querySelector('#last')
let inputEmail = document.querySelector('#email')
let inputQuantity = document.querySelector('#quantity')
let checkbox2 = document.querySelector('#checkbox2').checked

let nameErrorMessage = null;
let surnameErrorMessage = null;
let emailErrorMessage = null;
let quantityErrorMessage = null;
let selectedErrorMessage = null;
let checkbox1ErrorMessage = null;


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
        let inputSelectedOption = document.querySelector('input[name="location"]:checked')
        if(selected) {
            console.log(selected.value);
            removeMessageError(selectedErrorMessage)
            selectedErrorMessage = null
            return true;
        }
        else {
            if(!selectedErrorMessage) {
                selectedErrorMessage = createMessageError(`Vous devez saisir une entrée`)
                inputSelectedOption.parentNode.appendChild(selectedErrorMessage)
            }
            console.log("Aucune option sélectionnée");
            return false;
        }
    }

//Validate checkbox check form
function validateCheckbox(checkbox) {
    let checkbox1CreateSpan = document.querySelector('#checkbox1')
    if(checkbox) {
        removeMessageError(checkbox1ErrorMessage)
        checkbox1ErrorMessage = null
        return true
    } else {
        if(!checkbox1ErrorMessage) {
            checkbox1ErrorMessage = createMessageError(`Vous devez vérifier que vous acceptez les termes et conditions.`)
            checkbox1CreateSpan.parentNode.appendChild(checkbox1ErrorMessage)
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

    // let inputSelectedOption = document.querySelector('input[name="location"]:checked')
    // validateName(inputName)
    // validateSurname(inputSurname)
    // validateEmail(inputEmail)
    // validateQuantity(inputQuantity)
    // validateSelectedOption(inputSelectedOption)
    // if (inputSelectedOption) {
    //     console.log(inputSelectedOption.value);
    // } else {
    //     console.log("Aucune option sélectionnée");
    // }

    validateCheckbox(checkbox1)
    // validateCheckbox2(checkbox2)

    // if(!validateName && !validateEmail && !validateQuantity && !validateCheckbox) {
    //     alert('formulaire envoyer')
    // }
}

//Ecouter event form submit
form.addEventListener('submit', (event)=> {
    event.preventDefault()
    Validate()
})