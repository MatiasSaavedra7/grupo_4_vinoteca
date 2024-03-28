window.addEventListener("load", function(){
    //Capturamos etiqueta del icono (ojo) y del input de la contraseña
    let eyeIcon = document.querySelector(".icon-eye");
    let passwordField = document.querySelector("#password");

    //Verificamos si fueron capturados correctamente
    if(eyeIcon && passwordField) {
        //Agregamos un evento "click" al icono
        eyeIcon.addEventListener("click", function(){
            //Preguntamos si el icono contiene la clase del ojo cerrado
            if(eyeIcon.classList.contains('fa-eye-slash')) {
                //Caso afirmativo cambiamos al ojo abierto y mostramos la contraseña
                eyeIcon.classList.remove('fa-eye-slash');
                eyeIcon.classList.add('fa-eye');
                passwordField.type = "text";
            } else {
                //Caso contrario hacemos el paso inverso
                eyeIcon.classList.remove('fa-eye');
                eyeIcon.classList.add('fa-eye-slash');
                passwordField.type = "password";
            }
        });
    };
});
