const form = document.querySelector('.form')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const emailAddress = document.querySelector('#emailAddress')
const password = document.querySelector('#password')

form.addEventListener('submit', event => {
    event.preventDefault()

    checkInputs()
})

function checkInputs() {
    const firstNameVelue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const emailValue = emailAddress.value.trim()
    const passwordValue = password.value.trim()

    if(firstNameVelue === '') {
        setErroFor(firstName, 'First Name cannot be empty')
    } else {
        setSuccessFor(firstName)
    }

    if(lastNameValue === '') {
        setErroFor(lastName, 'Last Name cannot be empty')
    } else {
        setSuccessFor(lastName)
    }

    if(emailValue === '') {
        setErroFor(emailAddress, 'Email Address cannot be empty')
    } else if(!isEmail(emailValue)) {
        setErroFor(emailAddress, 'Looks like this is not an email')
    } else {
        setSuccessFor(emailAddress)
    }

    if(passwordValue === '') {
        setErroFor(password, 'Password cannot be empty')
    } else if(passwordValue.length < 8) {
        setErroFor(password, 'Password must be longer than 8 characters')
    } else {
        setSuccessFor(password)
    }
}

function setErroFor(input, message) {
    const formControl = input.parentElement
    const paragraph = formControl.querySelector('.paragraph')

    paragraph.innerHTML = message
    formControl.className = 'form-control erro'
}

function setSuccessFor(input) {
    const formControl = input.parentElement

    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}