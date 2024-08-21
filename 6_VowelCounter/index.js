function countVowels(name) {
    let vowelCount = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}

// Example usage
let userName = "Jonathan";
console.log("Number of vowels:", countVowels(userName)); 

userName = "Alice";
console.log("Number of vowels:", countVowels(userName)); 
