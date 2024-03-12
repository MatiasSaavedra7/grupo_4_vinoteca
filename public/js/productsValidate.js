window.addEventListener("load", function() {
    const form = document.querySelector("#formProducts");
    const name = document.querySelector("#name");
    const price = document.querySelector("#price");
    const discount = document.querySelector("#discount");
    const stock = document.querySelector("#stock");
    const description = document.querySelector("#description");
  
    form.addEventListener("submit", function(e) {
        // Restablece los errores antes de cada validación
        let errors = false;
  
        // Validación del campo "nombre"
        if (name.value.length < 5) {
            errors = true;
            document.querySelector("#nameError").textContent = "El campo nombre debe tener al menos 5 caracteres.";
            name.classList.remove("inputCuadro");
            name.classList.add("errorInput");
        } else {
            document.querySelector("#nameError").textContent = ""
            name.classList.remove("errorInput");
            name.classList.add("inputCuadro");
        }
  
        // Validación del campo "precio"
        if (isNaN(price.value) || parseFloat(price.value) <= 0) {
            errors = true;
            document.querySelector("#priceError").textContent = "El campo precio debe tener un valor válido.";
            price.classList.remove("inputCuadro");
            price.classList.add("errorInput");
        } else {
            document.querySelector("#priceError").textContent = "";
            price.classList.remove("errorInput");
            price.classList.add("inputCuadro");
        }
  
        // Validación del campo "descuento"
        if (isNaN(discount.value) || parseInt(discount.value) <= 0) {
            errors = true;
            document.querySelector("#discountError").textContent = "El campo descuento debe ser mayor a 0.";
            discount.classList.remove("inputCuadro");
            discount.classList.add("errorInput");
        } else {
            document.querySelector("#discountError").textContent = "";
            discount.classList.remove("errorInput");
            discount.classList.add("inputCuadro");
        }
  
        // Validación del campo "stock"
        if (isNaN(stock.value) || parseInt(stock.value) <= 0) {
            errors = true;
            document.querySelector("#stockError").textContent = "El campo stock debe ser mayor a 0.";
            stock.classList.remove("inputCuadro");
            stock.classList.add("errorInput");
        } else {
            document.querySelector("#stockError").textContent = "";
            stock.classList.remove("errorInput");
            stock.classList.add("inputCuadro");
        }
  
        // Validación del campo "descripción"
        if (description.value.length < 20) {
            errors = true;
            document.querySelector("#descriptionError").textContent = "El campo descripción debe tener al menos 20 caracteres.";
            description.classList.remove("inputCuadro");
            description.classList.add("errorInput");
        } else {
            document.querySelector("#descriptionError").textContent = "";
            description.classList.remove("errorInput");
            description.classList.add("inputCuadro");
        }
  
        // Control de errores
        if (errors) {
            e.preventDefault();
        } else {
            form.submit();
        }
    });
  });
  