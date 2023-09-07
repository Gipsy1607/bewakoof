// Question: Pattern Printing
// Create a program that prints the following pattern using asterisks (*) using for loops:
// Input - 5 
// Output -
// $
// $$
// $$$
// $$$$
// $$$$$
// // Answer:
var input = 5;
function dollarinput(num){
    for(i = 1;i<=num; i++){
        var pattern = ""
        for(j = 1; j<=i; j++){
            pattern = pattern + "$"
        }
    console.log(pattern)
    }
}
dollarinput(input)

// Palindrome Check
// Write a JavaScript function that checks if a given string is a palindrome (reads the same backward as forward). Return true if it's a palindrome; otherwise, return false.

// Example:

// Input: "racecar"
// Output: true

var word = "racecar"
function palindromecheck(wordcheck){
    for(i = 0; i<wordcheck.length/2 ; i++){
        if(wordcheck[i]!==wordcheck[wordcheck.length-1-i]){
            return false
        }
    }
    return true
}
console.log(palindromecheck(word))

// If the word is not a word it can be done in two forms:
// 1.

var word1 = "r"
function palindromecheck(wordcheck1){
    if(wordcheck1.length<1){
        return "It is not a word at all!"
    }
    for(i = 0; i<wordcheck1.length/2 ; i++){
        if(wordcheck1[i]!==wordcheck1[wordcheck1.length-1-i]){
            return false
        }
    }
    return true
}
console.log(palindromecheck(word1))

2.
var word2 = "s"

function palincheck(str){
    var flag = false
    for(i = 0; (i < str.length / 2)&& (str.length > 1);i++){
        if(str[i]!==str[str.length-1-i]){
            return false
        }
        flag = true
    }
    return flag 
}
console.log(palincheck(word2))