function calculateTotalBill(dishCosts, numberOfPeople) {
    // Check if the number of people is valid
    if (numberOfPeople <= 0) {
        return "Number of people must be greater than zero";
    }

    // Calculate the total bill
    let totalBill = dishCosts.reduce((sum, cost) => sum + cost, 0);
    
    // Calculate the bill per person
    let billPerPerson = totalBill / numberOfPeople;
    
    // Return the result as an object
    return {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
}

// Example usage
let dishCosts = [150, 200, 250, 100]; // Costs of each dish
let numberOfPeople = 4; // Number of people sharing the bill

let result = calculateTotalBill(dishCosts, numberOfPeople);
console.log(result);

