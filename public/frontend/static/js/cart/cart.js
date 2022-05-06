function addToCart(pizza){
    let cart = [];
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    cart.push(pizza);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeFromCart(pizzaId){
    let storagePizzas = JSON.parse(localStorage.getItem('cart'));
    let pizzas = storagePizzas.filter(pizza => pizza.pizzaId !== pizzaId );
    localStorage.setItem('cart', JSON.stringify(pizzas));
}