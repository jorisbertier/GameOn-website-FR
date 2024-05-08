// DOM elements
let form = document.querySelector('form')
let inputName = document.querySelector('#first')
let inputSurname = document.querySelector('#last')
let inputEmail = document.querySelector('#email')
let inputQuantity = document.querySelector('#quantity')
let errorMessage = null


function createMessageError(message) {
    errorMessage = document.createElement('span');
    errorMessage.classList.add('error')
    errorMessage.innerText = message
}

function removeMessageError() {
    if(errorMessage) {
        errorMessage.remove()
        errorMessage = null
        console.log('la')
    }
}



// Validate name
function validateName(name) {
    if(name.value.trim().length < 2) {
        if(!errorMessage) {
            createMessageError(`Le prénom  doit comporter au moins 2 caractères`)
            inputName.parentNode.appendChild(errorMessage)
        }
        return false;
    }
    removeMessageError()
    return true;
}

// Validate surname
function validateSurname(name) {
    if(name.value.trim().length < 2) {
        if(!errorMessage) {
            createMessageError(`Le nom doit comporter au moins 2 caractères`)
            inputSurname.parentNode.appendChild(errorMessage)
        }
        return false;
    }
    removeMessageError()
    return true;
}


// Validate Email form
function validateEmail(email) {
    let regexEmail = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$');
    if(!regexEmail.test(email.value)) {
        console.log("email non valide")
        return false
    }
}

//Validate quantity form
function validateQuantity(quantity) {
    let regexNumber = /^\d+$/;
    if(!regexNumber.test(quantity.value)) {
        console.log('Uniquement nombre')
        return false
    }
}

//Validate selected option form
function validateSelectedOption(selected) {
    if (selected) {
        console.log(selected);
        return;
    }
    else {
        console.log("Aucune option sélectionnée");
        return;
    }
}

//Validate checkbox check form
function validateCheckbox(checkbox) {
    if(checkbox) {
        console.log("check 1 valid")
        return
    } else {
        console.log("no check 1 invalid")
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

    validateName(inputName)
    validateSurname(inputSurname)
    validateEmail(inputEmail)
    validateQuantity(inputQuantity)

    if (inputSelectedOption) {
        console.log(inputSelectedOption.value);
    } else {
        console.log("Aucune option sélectionnée");
    }

    validateCheckbox(checkbox1)
    validateCheckbox2(checkbox2)

    if(!validateName && !validateEmail && !validateQuantity && !validateCheckbox) {
        alert('formulaire envoyer')
    }
}

//Ecouter event form submit
form.addEventListener('submit', (event)=> {
    event.preventDefault()
    Validate()
})