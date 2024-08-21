//QUESTION NO. 1 ->

//CALLING THE FUNCTION
console.log(addNumber(5,6))

//DECLEARATION OF FUNCTION
function addNumber(num1 , num2) {
    return num1 + num2
}

//QUESTION NO. 2 ->


// Function expression to define the function
const multiplyNums = function(num1, num2) {
    return num1 * num2;
};

// Calling the function before it is declared (demonstrating hoisting)
const result = multiplyNums(5, 10);
console.log(result);  // Output: 50


//QUESTION NO. 3 ->

// Function 
function sumNumbers(num1, num2) {
    // Declaring a variable 
    var sum;
    
    // Calculating 
    sum = num1 + num2;
    
    // Logging the value 
    console.log("Value of 'sum' before assignment:", sum);
    
    // Returning 
    return sum;
}

// Calling the function 
const result1 = sumNumbers(10, 20);

// Logging the result
console.log("Sum of the numbers:", result1); 


//QUESTION NO. 4 ->


{
    // Declare variables 
    let myLetVar; 
    var myVarVar;
    const myConstVar;

    // Log the values 
    console.log("Value of 'myLetVar' before assignment:", myLetVar); 
    console.log("Value of 'myVarVar' before assignment:", myVarVar); 
    console.log("Value of 'myConstVar' before assignment:", myConstVar); 

    // Assign values 
    myLetVar = "Let variable";
    myVarVar = "Var variable";
    myConstVar = "Const variable";

    // Log the values 
    console.log("Value of 'myLetVar' after assignment:", myLetVar); 
    console.log("Value of 'myVarVar' after assignment:", myVarVar); 
    console.log("Value of 'myConstVar' after assignment:", myConstVar); 
}

// Trying to access the variables 
console.log("Value of 'myLetVar' outside block scope:", myLetVar); 
console.log("Value of 'myVarVar' outside block scope:", myVarVar); 
console.log("Value of 'myConstVar' outside block scope:", myConstVar);


//QUESTION NO. 5 ->

{
    // Trying to log the value of a let variable 
    console.log("Value of 'myLetVar' before assignment:", myLetVar); 

    // Declare the variable using let 
    let myLetVar;

    // Assign a value to the variable
    myLetVar = "Let variable";

    // Log the value after assignment
    console.log("Value of 'myLetVar' after assignment:", myLetVar); // Output: Let variable
}
