// Create Color Mixer


//Generate Random Hex Color Code
//1. random
//2. convert in hexCode

//let hexColor = `#${Math.random().toString(16).slice(2, 8 ).padEnd(6, 0)}`

//console.log(hexColor)

function mixColors(color1, color2) {
    color1 = color1.toLowerCase();
    color2 = color2.toLowerCase();
    
    switch (true) {
        case (color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red"):
            console.log("purple");
            break;
        case (color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red"):
            console.log("orange");
            break;
        case (color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue"):
            console.log("green");
            break;
        default:
            console.log("Invalid color combination");
    }
}

// Example usage
mixColors("red", "blue");  
mixColors("red", "yellow");  
mixColors("blue", "yellow");  
mixColors("blue", "green");  
