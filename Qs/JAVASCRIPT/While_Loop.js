// let i = 1
// while (i<=5) {
//     console.log("Hii");
//     // i++
// }

// // Inifinite "Hii"

// WAS (write a script) to add the digits of a number .
// var n = 15
// temp = n
// var ld = 0
// var sum = 0
// while (temp > 0) {
//     ld = temp % 10
//     sum += ld
//     // temp = (temp / 10) | 0
//     // temp = ~~(temp / 10) 
//     // temp = parseInt(temp / 10) 
//     // temp = Math.floor(temp / 10) 
//     temp = Math.round(temp / 10) 
//     // temp = (temp / 10) 

// }
// console.log(sum);

// Wap to find to check whether the number is palindrome or not .

var n = 121
temp = n
var ld = 0
var res = 0
while (temp > 0) {
    ld = temp % 10
    res = (res*10) + ld
    temp = Math.floor(temp / 10) 
}
if (n === res){
    console.log("Palindrome ");
}
else {
    console.log("Not a Palindrome ");
}


