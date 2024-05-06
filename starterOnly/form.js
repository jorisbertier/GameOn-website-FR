// DOM elements
let form = document.querySelector('form')
let inputName = document.querySelector('#first')
let inputSurname = document.querySelector('#last')
let inputEmail = document.querySelector('#email')
let inputQuantity = document.querySelector('#quantity')


// Validate name & surname form
function validateName(name, fieldName) {
    if(name.value.trim().length < 2) {
        console.log(`Le ${fieldName}  doit comporter au moins 2 caractères`)
        return false
    }
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

    validateName(inputName, "prénom")
    validateName(inputSurname, "nom")
    validateEmail(inputEmail)
    validateQuantity(inputQuantity)

    if (inputSelectedOption) {
        console.log(inputSelectedOption.value);
    } else {
        console.log("Aucune option sélectionnée");
    }

    validateCheckbox(checkbox1)
    validateCheckbox2(checkbox2)

    if(validateName && validateEmail && validateQuantity && validateCheckbox) {
        alert('formulaire envoyer')
    }
}

//Ecouter event form submit
form.addEventListener('submit', (event)=> {
    event.preventDefault()
    Validate()
})