function calculateRentalCost(daysRented, carType) {
    // Define the rental costs per day for each car type
    const rentalCosts = {
        "Economy": 4000,
        "Midsize": 15000,
        "Luxury": 20000
    };

    // Check if the car type is valid
    if (!rentalCosts[carType]) {
        return "Invalid car type";
    }

    // Calculate the total cost
    let totalCost = daysRented * rentalCosts[carType];
    
    return totalCost;
}

// Example usage
let days = 5;
let type = "Luxury";
let cost = calculateRentalCost(days, type);
console.log(`The rental cost for ${days} days of a ${type} car is Rs. ${cost}`);

