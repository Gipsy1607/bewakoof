// Question 1:

var array1 = ["hi", "My Name is swarangi","this is my test", "i am perplexed to core!"]

function findStringLength(array) {
        // console.log(array, "strings from the given array")
        var result = []
        for (var i = 0; i < array.length; i++) {
            // console.log(array[i].length)
            result.push(array[i].length)
        }
        return result;
    }
    
    console.log(findStringLength(array1))

// Question 2:

var array2 = [12,23,4,56,67,87,94,75,23,55,22,66,86,10]

function EvenNumberSum(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            result.push(array[i])
        }
    }
    return result;
}

console.log(EvenNumberSum(array2))

// Question 4:

var array3 = [12,23,4,56,67,87,94,75,23,55,22,66,86,10]
var array4 = [34,45,123,546,74,756,96,12,87,98,23]

function SameArray(array3, array4) {
    var bothArray = [];
    for (var i = 0; i < array3.length; i++) {
        for (var j = 0; j < array4.length; j++) {
            if (array3[i] == array4[j]) {
                bothArray.push(array3[i])
            }
        }
    }
    return bothArray;
}

console.log(SameArray(array3, array4))

// Questions 3:

var array5 = [12,23,4,56,67,87,94,75,23,55,22,66,86,10]

function SmallestNumber(array) {
    var minimum = array[0]; 
    for (var i = 1; i < array.length; i++) {
        if (minimum > array[i]) {
            minimum = array[i]; 
        }
    }
    return minimum
}
console.log(SmallestNumber(array5))