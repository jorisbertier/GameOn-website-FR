// DOM elements
let form = document.querySelector('form')
let inputName = document.querySelector('#first')
let inputSurname = document.querySelector('#last')
let inputEmail = document.querySelector('#email')
let inputQuantity = document.querySelector('#quantity')



function validateName(name) {
    if(name.value.trim().length < 2) {
        console.log("Le prénom doit comporter au moins 2 caractères")
        return
    }
}

function validateSurname(surname) {
    if(surname.value.trim().length < 2) {
        console.log("Le nom doit comporter au moins 2 caractères")
    }
}
// Tous les champs de validation du formulaire
function Validate() {

}

form.addEventListener('submit', (event)=> {
    event.preventDefault()
    // let regexEmail = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$');
    // const regexNumber = /^\d+$/;

    // let inputSelectedOption = document.querySelector('input[name="location"]:checked').value
    let checkbox1 = document.querySelector('#checkbox1').checked
    let checkbox2 = document.querySelector('#checkbox2').checked
    

    // if(inputName.value.trim().length < 2) {
    //     console.log("Le prénom doit comporter au moins 2 caractères")
    // }
    validateName(inputName)
    validateSurname(inputSurname)
    // if(inputSurname.value.trim().length < 2) {
    //     console.log("Le nom doit comporter au moins 2 caractères")
    // }
    // if(!regexEmail.test(inputEmail.value)) {
    //     console.log("email non valide")
    // }

    // if(!regexNumber.test(inputQuantity.value)) {
    //     console.log('Uniquement nombre')
    // }
    // if(checkbox1) {
    //     console.log("check 1 valid")
    // } else {
    //     console.log("no check 1")
    // }

    // if(checkbox2) {
    //     console.log("check 2 valid")
    // } else {
    //     console.log("no check 2")
    // }
})