const readline = require(`readline`);

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


console.log("Welcome to the password validator tool!")
reader.question("Please provide a password to validate: ", function(input){
    let numbers = input.match(/\d+/g);
    let capitals = input.match(/[A-Z]/);
    let lowercase = input.match(/[a-z]/);
    let specialCharacters = input.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);
    if (input.length < 10) {
        console.log("Password is too short! Please make it at least 10 characters long")
    } else if (specialCharacters == null) {
        console.log("You need at least one symbol. (ex. !, @, #, $)")
    } else if (numbers == null) {
        console.log("You need at least one number")
    } else if (capitals == null) {
        console.log("You need at least one capital letter")
    } else if (lowercase == null) {
        console.log("You need at least one lower case letter")
    } else {
        console.log("Thank you for inputing a password!")
    }
    
    
    reader.close()
});