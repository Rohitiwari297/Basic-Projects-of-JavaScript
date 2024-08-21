const calculateTotalCost = cart => {
    return cart.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
};

// Example usage
const customerCart = [
    { unitPrice: 100, quantity: 2 },  // Item 1
    { unitPrice: 200, quantity: 1 },  // Item 2
    { unitPrice: 50, quantity: 4 }    // Item 3
];

const totalCost = calculateTotalCost(customerCart);
console.log("Total cost of items in the cart:", totalCost);

