window.addEventListener('load', function(){

    console.log("¡¡¡ CONECTADO !!!");

    let form = document.querySelector('.form');
    let emailInput = document.querySelector('#email')
    let passwordInput = document.querySelector('#password')

    // Funcion que retorna true si el input está vacio.
    const isRequired = value => value === '' ? false : true;

    // Funcion para evaluar si el dato ingresado es un email.
    const isEmailFormat = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
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

    const checkEmail = function(){
        let valid = false;

        const email = emailInput.value.trim();

        if(!(isRequired(email))){
            showError(emailInput, 'Este campo no puede estar vacio!')
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

        const password = passwordInput.value.trim();

        if(!(isRequired(password))){
            showError(passwordInput, 'Debes ingresar tu contraseña')
        } else {
            showSuccess(passwordInput)
            valid = true;
        }

        return valid;
    }

    form.addEventListener('submit', function(event){
        let isEmailValid = checkEmail(),
            isPasswordValid = checkPassword();

        let isFormValid = isEmailValid && isPasswordValid;

        if (isFormValid) {
            console.log('Usuario logeado!');
        } else {
            event.preventDefault();
        }
    });

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

    form.addEventListener('input', debounce(function(event){
        switch(event.target.id){
            case 'email':
                checkEmail();
                break;
            case 'password':
                checkPassword();
                break;
            default:
        }
    }));
    
})