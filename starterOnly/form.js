let modal = document.querySelector('.modal-body')
let checkbox1ErrorMessage = null;

function validateCheckbox(checkbox) {
    let checkbox1ErrorSpan  = document.querySelector('#checkbox1')
    if(checkbox) {
        checkbox1ErrorMessage = null
        const existingErrorMessage = checkbox1ErrorSpan.parentNode.querySelector('.error');
        if (existingErrorMessage) {
            existingErrorMessage.parentNode.removeChild(existingErrorMessage);
        }
        return true
    } else {
        if(!checkbox1ErrorMessage) {
            const errorMessage = document.createElement('span');
            errorMessage.classList.add('error');
            errorMessage.innerText = `Vous devez vérifier que vous acceptez les termes et conditions.`;
            checkbox1ErrorSpan.parentNode.appendChild(errorMessage)
            checkbox1ErrorMessage = errorMessage;
        }
        return false
    }
}

document.querySelector('.btn-submit').addEventListener('click', (event)=> {
    event.preventDefault()
    let valid = true;
    const form = document.getElementById('form');
    let checkbox = document.querySelector('#checkbox1').checked

    for(let input of form.querySelectorAll('input[data-validation], textarea[data-validation], select[data-validation]')) {
        let span = input.nextElementSibling;
        if (!input.checkValidity()) {
            valid = false;
            input.classList.add('inputError')
            span.textContent = input.getAttribute('data-error-message');
            span.classList.add('error');
        } else {
            input.classList.remove('inputError')
            span.textContent = "";
        }
    }

    let isCheckboxValid = validateCheckbox(checkbox);

    if(valid && isCheckboxValid) {
        form.innerHTML = "Merci pour votre inscription !"
        modal.classList.add('modal-validate');
        let button = document.createElement('button')
        button.innerText = "Fermer"
        button.classList.add('btn-submit')
        button.classList.add('margin')
        button.classList.add('closeBtn')
        form.appendChild(button)

        button.addEventListener('click', (event)=> {
            event.preventDefault()
            modalCloseForm();
        })
    }
})
