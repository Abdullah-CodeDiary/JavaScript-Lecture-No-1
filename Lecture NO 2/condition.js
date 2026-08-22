console.log("HELLO")

//Let and function are two different things let are used to store variables and data while function is used to take action in code or and making a code logic

// conditional value Example 1

let age = 45;
if (age > 18) {
    console.log("You can drive")
}
else {
    console.log("You cannot drive")
}

// conditional value Example 2

let salary = 70000
if (salary > 60000){
    console.log("Your salary is good")
}
else{
    console.log("Your salary is adjustable")
    
}

// Operator in JavaScript

// Arithmetic Operator

// Addition 

let one = 64;
let two = 32;
console.log(one + two)

// Subtraction
                             
let three = 90;
let four = 40;
console.log(three - four)

// Multiplication

let five = 5;
let six = 4;
console.log(five * six)

// Devision 

let seven = 8;
let eight = 6;
console.log(seven / eight)

// Exponention

let nine = 8;
let ten = 3;
console.log(nine ** ten)

// Modulus

let eleven = 67;
let tweleve = 32;
console.log(eleven % tweleve)

// Compound assigment operator

let thirteen = 32;
let forteen = 12;
console.log(thirteen += forteen)

let marks = 50;
marks = marks + 10
console.log(marks)

// Increment ++

let count = 5;
count++
console.log(count)

// Increment --

let tv = 55;
tv--
console.log(tv)

// Equality operators

//Equality operator: An operator used to check whether two values are equal or not.

let height = 142;
if (height == 9){
    console.log("Your height is normal")
}
else{
    console.log("Your height is less")
}

// Not equal operator

//Not equal operator: An operator used to check whether two values are **not** equal to each other.

let group = 23
if (group !=30){
    console.log("Correct")
}
else{
    console.log("False")
}

// Equal value or type operator

//Equal value and type operator** (also known as the strict equality operator, `===`): An operator used 
// to check whether two values are equal and have the same data type.

let x = 5;
let y = '8';
console.log(x === y)

// If else if and else multiple conditions

// Example NO 1

 salary = 90000;
if (salary == 70000) { // Is salary is equalls to ninty thousand ?
    console.log("Your salary is high");
} else if (salary > 60000) { // Is salary is less than sixty thousand ?
    console.log("Your salary is good");
} else {
    console.log("Your salary is adjustable");
}

// Example NO 2

// Note : You also use multiple elseif condition

age = 20
if (age>10){
    console.log("You are elder")
}else if (age == 0){
      console.log("Your age is younger")
}else{
    console.log("Your are die")
}

// Switch

//"A switch statement is a conditional programming statement used to check multiple possible options or conditions for a single variable, making it a cleaner alternative to writing many if-else statements."

let foodItems = "Burger";
switch (foodItems){
    case "Burger":
        console.log("The Price of burger is 500 PKR - Please confirm your order")
        break;
        case "Pizza":
            console.log("The Price of burger is 1200 PKR - Please confirm your order")
            break;
            case "Biryani":
                console.log("The Price of burger is 400 PKR - Please conform your order!")
                break;
                default:
                    console.log("I'm sorry menu is not avialable.")
}