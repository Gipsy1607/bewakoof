// Question. Find out all odd number from the given array?

var array = [2, 13, 26, 35, 47, 56, 68, 77, 80, 79, 93, 108]
var AdditionofOddNumber = 0;
var AdditionofEvenNumber = 0;
console.log("The Given Array is ", array)

for(var i = 0; i < array.length; i++){
    if(array[i] % 2 != 0){
        console.log("This are Odd Numbers Addition",AdditionofOddNumber, array[i])
        AdditionofOddNumber = AdditionofOddNumber + array[i];
        console.log(AdditionofOddNumber, "Value Updated")
    }
    else{
        console.log("This are Even Numbers Addition",AdditionofEvenNumber, array[i])
        AdditionofEvenNumber = AdditionofEvenNumber + array[i];
        console.log(AdditionofEvenNumber, "Value Updated")
    }
}

console.log(AdditionofEvenNumber, "- Addition of Even numbers")
console.log(AdditionofOddNumber, "- Addition of Odd number")

// Question. Find out addition of two numbers from the given array until it is equal to the target?

var array2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3]
var target = 12
console.log("The given array is ",array2)
console.log("The Target to be found is ",target)

for(var i = 0; i < array2.length; i++){
    for(var j = i + 1; j < array2.length; j++){
        // console.log(i,j)
        // console.log(array[i], array[j])
        // console.log(array[i] + array[j])
        if(array2[i] + array2[j] == target){
            console.log(array2[i], "+", array2[j], "=", array2[i] + array2[j])
        }
    }
}

