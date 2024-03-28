window.addEventListener("load", function () {
    //Obtenemos la URL de la página actual.
    let urlPath = window.location.pathname;

    //Dividimos la URL en un array
    let urlSegments = urlPath.split('/');

    // Intenta obtener el número de página desde el último segmento de la URL.
    let currentPageNumber = parseInt(urlSegments[urlSegments.length - 1]);

    //Definimos una varaible para la categoria de la URL.
    let currentPageCategory;

    // Si el último segmento no es un número, se asume que es la primera página.
    if (isNaN(currentPageNumber)) {
        //Inicializamos el número de página en 0
        currentPageNumber = 0;

        //y le pasamos el ultimo elemento de la URL que será nuestra categoria.
        currentPageCategory = urlSegments[urlSegments.length - 1];
    }else {
        //Caso contrario en el que si venga el número de página le pasamos el penultimo elemento.
        currentPageCategory = urlSegments[urlSegments.length - 2];

    }

    //Atrapamos el ul que contiene nuestras etiquetas li y a.
    let paginateElement = document.querySelector('.paginate');

    //Guardamos en esta variable el total de páginas que pasamos en la vista a traves de un atributo de datos personalizado.
    let totalPages = parseInt(paginateElement.getAttribute('data-total-pages'));

    //Atrapamos las etiquetas a que nos sirven para avanzar o retroceder.
    let previousLink = document.querySelector(".previous");
    let nextLink = document.querySelector(".next");

    // Nos aseguramos de que los enlaces "anterior" y "siguiente" no se muestren en la primera y última página.
    
    //Verificamos si la página actual es mayor a 0.
    if (currentPageNumber > 0) {
        //Construimos la ruta para previous.
        previousLink.href = `/products/${currentPageCategory}/` + (currentPageNumber - 1);
    } else {
        //Ocultamos la flecha de previous.
        previousLink.style.display = 'none';
    }

    //Verificamos la página actual es menor al límite de páginas.
    if (currentPageNumber < totalPages - 1) {
        //Construimos la ruta para next.
        nextLink.href = `/products/${currentPageCategory}/` + (currentPageNumber + 1);
    } else {
        //Ocultamos la flecha de next.
        nextLink.style.display = 'none';
    }
});
