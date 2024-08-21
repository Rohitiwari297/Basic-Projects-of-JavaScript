function removeDuplicates(cart) {
    // Convert the cart array to a Set to remove duplicates, then convert it back to an array
    let uniqueCart = [...new Set(cart)];

    return uniqueCart;
}

// Example usage
let customerCart = ["apple", "banana", "apple", "orange", "banana", "grape"];
let updatedCart = removeDuplicates(customerCart);
console.log("Cart without duplicates:", updatedCart);

