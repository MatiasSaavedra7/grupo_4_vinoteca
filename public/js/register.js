window.addEventListener('load', function(){

    console.log('¡¡¡ CONECTADO !!!');
    
    let form = document.querySelector('#register-form');
    let firstNameInput = document.querySelector('#firstName');
    let lastNameInput = document.querySelector('#lastName');
    let emailInput = document.querySelector('#email');
    let passInput = document.querySelector('#pass');
    let rePassInput = document.querySelector('#reppass');

    // Funcion que retorna true si el input está vacio.
    const isRequired = value => value === '' ? false : true;
    
    // Funcion para evaluar la longitud del valor ingresado en el input.
    const isBetween = (length, min, max) => length < min || length > max ? false : true;

    // Funcion para evaluar si el dato ingresado es un email.
    const isEmailFormat = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const isPasswordSecure = (password) => {
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return re.test(password);
    };

    // Desarrollo de funciones que muestran mensajes de error/exito

    // Funcion para mostrar los errores.
    const showError = (input, message) => {
        // Selecciono el input del formulario
        // La propiedad parentElement retorna el elemento padre del elemento especificado.
        const formField = input.parentElement;
        // Agrego la clase error
        formField.classList.remove('success');
        formField.classList.add('error');
        // Muestro un mensaje de error
        const error = formField.querySelector('small');
        error.textContent = message;
    }

    // Funcion que muestra si la informacion es correcta.
    const showSuccess = (input) => {
        // Selecciono el input del formulario.
        // La propiedad parentElement retorna el elemento padre del elemento especificado.
        const formField = input.parentElement;
        // Agrego la clase success
        formField.classList.remove('error');
        formField.classList.add('success');
        // Borro el contenido del small
        const error = formField.querySelector('small');
        error.textContent = '';
    }

    const checkFirstName = function(){
        let valid = false;

        const min = 2, max = 30;

        const firstName = firstNameInput.value.trim();

        if(!(isRequired(firstName))){
            showError(firstNameInput, 'Este campo no puede estar vacio.');
        } else if(!(isBetween(firstName.length, min, max))){
            showError(firstNameInput, `El nombre debe tener entre ${min} y ${max} caracteres.`);
        } else {
            showSuccess(firstNameInput);
            valid = true;
        }

        return valid;
    }

    const checkLastName = function(){
        let valid = false;
        const min = 2, max = 30;

        const lastName = lastNameInput.value.trim();

        if(!(isRequired(lastName))){
            showError(lastNameInput, 'Este campo no puede estar vacio.')
        } else if(!(isBetween(lastName.length, min, max))){
            showError(lastNameInput, `El apellido debe tener entre ${min} y ${max} caracteres.`)
        } else {
            showSuccess(lastNameInput);
            valid = true;
        }

        return valid;
    }

    const checkEmail = function(){
        let valid = false;

        const email = emailInput.value.trim();

        if(!(isRequired(email))){
            showError(emailInput, 'El campo email no puede estar vacio.')
        } else if(!(isEmailFormat(email))){
            showError(emailInput, 'No es un formato de email válido.')
        } else {
            showSuccess(emailInput)
            valid = true;
        }

        return valid;
    }

    const checkPassword = function(){
        let valid = false;

        const password = passInput.value.trim();

        if(!(isRequired(password))){
            showError(passInput, 'Debes ingresar una contraseña.');
        } else if(!(isPasswordSecure(password))){
            showError(passInput, 'La contraseña debe tener al menos 8 caracteres que incluyan al menos una letra mayuscula, una minuscula, un número y un caracter especial.');
        } else {
            showSuccess(passInput);
            valid = true;
        }

        return valid;
    }

    const checkConfirmPassword = function(){
        let valid = false;

        const confirmPassword = rePassInput.value.trim();
        const password = passInput.value.trim();

        if(!(isRequired(confirmPassword))){
            showError(rePassInput, 'Debes ingresar una contraseña.');
        } else if(password !== confirmPassword){
            showError(rePassInput, 'Las contraseñas no coinciden!')
        } else {
            showSuccess(rePassInput);
            valid = true;
        }

        return valid;
    }

    form.addEventListener('submit', function(event) {
        
        let isFirstNameValid = checkFirstName(), 
            isLastNameValid = checkLastName(),
            isEmailValid = checkEmail(),
            isPasswordValid = checkPassword(),
            isRePasswordValid = checkConfirmPassword();
        
        let isFormValid = isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isRePasswordValid;
        
        
        if(isFormValid){
            console.log('Usuario registrado!');
        } else {
            event.preventDefault();
        }
    })

    const debounce = function(fn, delay = 500){
        let timeoutId;
        return (...args) => {
            //  Cancel the previous timer
            if(timeoutId){
                clearTimeout(timeoutId);
            }
            //  Setup a new timer
            timeoutId = setTimeout(() => {
                fn.apply(null, args)
            }, delay);
        };
    };

    form.addEventListener('input', debounce(function(event) {
        switch(event.target.id){
            case 'firstName':
                checkFirstName();
                break;
            case 'lastName':
                checkLastName();
                break;
            case 'email':
                checkEmail();
                break;
            case 'pass':
                checkPassword();
                break;
            case 'reppass':
                checkConfirmPassword();
                break;
            default:
        }
    }))
})