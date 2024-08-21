

passwordvalidator = function(password, confirmPassword){
    if(password === confirmPassword){
        console.log("password Matched")
    }else{
        console.log("Password does't match")
    }
}

let result = passwordvalidator("12345", "12345")

console.log(result)