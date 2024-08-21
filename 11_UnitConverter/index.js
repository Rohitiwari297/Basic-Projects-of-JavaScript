function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Example usage
let tempInCelsius = 25;  // Example temperature in Celsius
let tempInFahrenheit = celsiusToFahrenheit(tempInCelsius);
console.log(`${tempInCelsius}°C is equal to ${tempInFahrenheit}°F`);
// Output: "25°C is equal to 77°F"
