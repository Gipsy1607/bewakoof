const array = [1,2,3,4,5,6,7,8,94,134,244,356,467,788,568,]
const target = 10;

for(i = 0; i < array.length - 2; i++){
    for(j = i + 1; j < array.length - 1; j++){
        for(k = j + 1; k < array.length; k++){
            if(array[i] + array[j] + array[k] == target){
                console.log(array[i], array[j], array[k])
            }
        }
    }
}

function addition() {
    var num1 = 345;
    var num2 = 675;
    return num1 + num2
}

console.log(addition(), "- addition of 345 and 675") 

function subtraction(){
    var num1 = 754;
    var num2 = 345;
    return num1 - num2 
}

console.log(subtraction(), "- Subtraction of 754 and 345")

function multi(first, second, third){
    console.log(first, second, third)
    const product = first * second;
    const product2 = second * third;
    return product + product2 
}
multi(43, 67, 45)

function Welcomemessage(name, surname, city, standard, age){
    console.log(`My name is ${name, surname}. I am from ${city}. I study in ${standard} at the age of ${age}.`)
}

Welcomemessage("Swarangi", "Tarkar", "Navi Mumbai", "SYBA", 19)

// Question. Addition of a given array?

var elements = [2,3,4,5,6,7,8,34,56,24]
var result = 0

function additionofelements(){
    for(i = 0; i < elements.length; i++){
        result = result + elements[i]
    }
    return result
}
console.log(additionofelements(elements))

// Question. Find a number and if found return "Yes" and not found return the value as "No"?

var array2 = [2,4,5,3,6,34,56,67,24,78,55,56]
var target1 = 36;
var found1 = false;

function find(){
    for(i = 0; i < array2.length; i++){
        if(array2[i] == target1){
            found1 = true;
            return "YES"
        }
    }
    return "NO"
}
console.log(find())

var array3 = [2,4,5,3,6,34,56,67,24,78,55,56]
var target2 = 67;
var found = false;

function Search(){
    for(i = 0; i < array2.length; i++){
        if(array3[i] == target2){
            found = true;
            return "YES"
        }
    }
    return "NO"
}
console.log(Search())

// Question. Find a number and if found return its count?

var array4 = [2,4,5,3,6,34,56,67,67,78,55,56]
var target3 = 67;
var recount = 0;

function count(){
    for(i = 0; i < array4.length; i++){
        if(array4[i] == target3){
            recount++;
        }
    }
    return recount;
}

console.log(count())
