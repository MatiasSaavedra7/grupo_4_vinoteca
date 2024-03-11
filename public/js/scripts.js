function productosEnElCarrito(){
    return localStorage.cart ? JSON.parse(localStorage.cart).length : 0;
}

window.addEventListener('load', function() {

    console.log('CONECTADO !!!');

    let products = document.querySelectorAll('.add-to-cart');
    let cartNumber = document.querySelector('.cart-number');

    cartNumber.innerText = productosEnElCarrito();

    products.forEach((product) => {
        // Escucho el evento 'click'
        product.addEventListener('click', function(e){
            // Pregunto si existe 'carrito' en el localStorage.
            if(localStorage.cart){
                let cart = JSON.parse(localStorage.cart);

                let index = cart.findIndex((prod) => prod.id == e.target.dataset.id);

                if(index != -1){
                    // Si el producto ya se encuentra en el carrito, le sumo uno.
                    cart[index].quantity = cart[index].quantity + 1;
                } else {
                    // Si el producto no esta en el carrito, lo agrego al array con el metodo push().
                    cart.push({ id: e.target.dataset.id, quantity: 1 });
                }
                localStorage.setItem('cart', JSON.stringify(cart));
            } else {
                // Si no existe, entonces lo agrego al localStorage
                localStorage.setItem('cart', JSON.stringify([{ id: e.target.dataset.id, quantity: 1 }]))
            }

            // Actualizo el numero que se muestra a la par del carrito en el header
            cartNumber.innerText = productosEnElCarrito();
        })
    })
})