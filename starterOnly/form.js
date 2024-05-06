
let form = document.querySelector('form')
let inputName = document.querySelector('#first')
let inputSurname = document.querySelector('#last')

function Validate() {

}
form.addEventListener('submit', (event)=> {
    event.preventDefault()

    if(inputName.value.trim().length < 2) {
        console.log("non")
    }
    if(inputSurname.value.trim().length < 2) {
        console.log("non")
    }
    
})