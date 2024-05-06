
let form = document.querySelector('form')
let inputName = document.querySelector('#first')
let inputSurname = document.querySelector('#last')
let inputEmail = document.querySelector('#email')
let inputQuantity = document.querySelector('#quantity')

function Validate() {

}
form.addEventListener('submit', (event)=> {
    event.preventDefault()
    let regexEmail = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$');
    const regexNumber = /^\d+$/;

    // if(inputName.value.trim().length < 2) {
    //     console.log("Le prénom doit comporter au moins 2 caractères")
    // }
    // if(inputSurname.value.trim().length < 2) {
    //     console.log("Le nom doit comporter au moins 2 caractères")
    // }
    if(!regexEmail.test(inputEmail.value)) {
        console.log("email non valide")
    }

    if(!regexNumber.test(inputQuantity.value)) {
        console.log('Uniquement nombre')
    }
    
})