                                     // Using var variable

                                //   var is a function scoped variable and can be reassigned and redeclared in the same scope.
var a = 5;
a = a + 1;
console.log(a);
var b = 6;
console.log(a + b);

var a = 6;
var b = 9;
console.log(a - b);

// Strings means collection of characters -
//  String data types written in double quotation -

var c = "Harry" 

// If you check the type of the varibale type this 

console.log(typeof a , typeof b , typeof c );

// Rules of writting variable

// This is valid variable
var _3 = "Haris";

// This is invalid variable
// var 55a = "Ahsan";

// JavaScript variables are case sensitive - For Example:
// ahmed & Ahmed are different variable 

var ahmed = 40;
var Ahmed = 80;
console.log(ahmed + Ahmed);

// Using let variable

// let is a block scoped variable and can be reassigned but cannot be redeclared in the same scope.
// Note : Let aik strict variable huta ha jo aik block k ander hi use hota ha aur aik bar declare ho jata ha to usko dobara declare nahi kar sakty ar na he wo us value ko asign kareh ga jo var usse kar chuka hu .

let a2 = 6;
a2 = a2 + 6;
{
console.log(a2);
}
console.log(a2);
// Using const value 
// const value cannot be changed
//  Not allowed because a1 is constant

// const a1 = 6;
// a1 = a1 + 6; a1 
// console.log(a1);

var d = 20;
d = d + 12;
console.log(d);

// Seven primitive data types in JavaScript are:

let j = "Abdullah"; // Double quotation ma likhe gae chez string huti han chaha wo aik character ho ya aik word ya aik sentence ho.
let e = 20; // Number
let f = 3.44;
let g = true; // Boolean
let h = null; // Null is a type of object and primitive it is used to represent the intentional absence of any object value. (Interview Question)
let i = undefined; // Undefined
console.log(j , e , f , g , h , i);

console.log(typeof j , typeof e , typeof f , typeof g , typeof h , typeof i);

let o = {
     name:"Abdullah",
     "job role": "Developer",    
}
console.log(o); // If you printe console.log("") with double quotation they print the variable value exact like the console value and if you print console.log without quotations they print the answer of the function - 

o.Salary = "50 LPA", o.Experience = "3 Years", o.is_handsome = "true"; // If you add item in the function target the assign value and using assign vallue dot etc and print it again -
console.log(o);
