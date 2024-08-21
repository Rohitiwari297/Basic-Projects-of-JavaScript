function capitalizeFirstLetter(name) {
    // Check if the first letter is lowercase
    let modifiedName = (name[0] === name[0].toLowerCase()) 
        ? name[0].toUpperCase() + name.slice(1) 
        : name;

    return modifiedName;
}

// Example usage
let userName = "john";
console.log(capitalizeFirstLetter(userName)); 

userName = "Alice";
console.log(capitalizeFirstLetter(userName)); 
