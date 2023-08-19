var myfriends = ["Soha", "Nisha", "Twinkle", "Raanan", "Ansa", "Ami"]

console.log(myfriends.length)
console.log(myfriends[0])
console.log(myfriends[1])
console.log(myfriends[2])
console.log(myfriends[3])
console.log(myfriends[4])
console.log(myfriends[5])

for(var i = 0; i < myfriends.length; i++){
    if(myfriends[i]=="Twinkle"){
    console.log("We found Twinkle and the Value is", myfriends[i], "While its index is", i)
    break;
    }
}