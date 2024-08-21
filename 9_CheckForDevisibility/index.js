function printDivisibleBy3Not2(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 !== 0 || numbers[i] % 2 === 0) {
            continue; // Skip to the next iteration if the number is not divisible by 3 or if it is divisible by 2
        }
        console.log(numbers[i]);
    }
}

// Example usage
let numbersArray = [1, 3, 6, 9, 12, 15, 18, 21];
printDivisibleBy3Not2(numbersArray);

