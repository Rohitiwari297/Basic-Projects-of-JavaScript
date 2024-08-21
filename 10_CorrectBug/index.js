function correctCartQuantities(cart) {
    for (let i = 0; i < cart.length; i++) {
        cart[i] = cart[i] * 2;  // Double the quantity of each item
    }
    return cart;
}

// Example usage
let cartQuantities = [2, 5, 3, 7, 1];  // Current incorrect quantities
let correctedCart = correctCartQuantities(cartQuantities);
console.log("Corrected Cart Quantities:", correctedCart);

