// Data types 


// 1. String : 

// Syntax = "", '', ``
// Examples : 
// "Swarangi", 'swarangitarkar@gmail.com', `19` , "My name is Swarangi Tarkar",
// 'My age is 19 and my school is swarangi tarkar..'

// 2. Number : 

// Syntax : 
// 14, 52458, -9834, 63.95, 100

// 3 Boolean : 

// Syntax : 
// true , false

// 4. Undefined: It  Initially HAS no value 




// Varibles - 

// var 
// let 
// const

// var syntax: var nameofvariable = value;

// Examples:

var myname = "Swarangi";
var mysurname = 'Tarkar';
var myage = 19;
var mydescription = 'I love reading books!';
var ismygraduationcompleted = false;

console.log("My name is: ", myname, typeof (myname))
console.log("My Surname is: ", mysurname, typeof (mysurname))
console.log("My Age is: ", myage, typeof (myage))
console.log("My Description is: ", mydescription, typeof (mydescription))
console.log("Am I a graduated student? ", ismygraduationcompleted, typeof (ismygraduationcompleted))

var number1 = 924;
var number2 = 345;
var num3 = 2;

var addition = number1 + number2;
var subtraction = number1 - number2;
var multiplication = number1 * number2;
var division = number1 / (number2 * num3);

console.log("This is no. 1 = ", number1,)
console.log("This is no. 2 =", number2)
console.log("This is no. 3 =", num3)
console.log("Addition of no. 1&2 is ", addition)
console.log("Subtraction of no. 1&2 is ", subtraction)
console.log("Multiplication of no. 1&2 is ", multiplication)
console.log("Division of no. 1&2 (while no. 2 is multiplied by no.3) is ", division)

var message = "Welcome to our Website!!! Miss. ${myname}"
var newmesage = `Welcome to our Website!!! Miss.${myname}`