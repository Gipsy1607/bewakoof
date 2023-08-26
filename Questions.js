var array = ["hi", "My Name is swarangi","this is my test", "i am perplexed to core!"]
var output = 0;

for (i=0; i<array.length; i++){
    array[i]==output;
    console.log(array, "and its length is", array.length)
    break;
}

var array2 = [12,23,4,56,67,87,94,75,23,55,22,66,86,10]

for (i = 0; i < array2.length; i++){
    if(i % 2 == 0){
        console.log("The even numbers are", array2[i])
    }
}

var array3 = [12,23,4,56,67,87,94,75,23,55,22,66,86,10]
var array4 = [34,45,123,546,74,756,96,12,87,98,23]
var botharray = []

for(i=0;i<array3.length; i++){
    for(j=0;j<array3.length;j++){
        botharray.push(array3[i],array4[j])
        console.log(botharray)
        break;
    }
}

var array5 = [12,23,4,56,67,87,94,75,23,55,22,66,86,10]

for(i = 0; i < array5.length;){
    array5[i]<array5;
    console.log("The Smallest Number is...",array5[i])
}

