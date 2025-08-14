// Armstrong Number

// var n = 153;
// var temp = n
// var count = 0
// while (temp > 0) {
//     count +=1
//     temp = Math.floor(temp/10)
// }
// var temp = n
// var ld = 0
// var res = 0
// while (temp > 0) {
//     ld = temp % 10
//     res = res + ld**count
//     temp = Math.floor(temp/10)
// }

// if (res === n) {
//     console.log("Armstrong Number");
    
// } else {
//     console.log("Not Armstrong Number");
    
// }

// Perfect Number - 6,28,496
// var n = 28;
// var temp = n
// var div = 0
// for (var i = 1; i <= Math.floor(n/2);i++){
//     if (n % i == 0) {
//         div += i
//     }
// }
// if (div === n) {
//     console.log("Perfect Number");
    
// } else {
//     console.log("Not Perfect Number");
    
// }

// Strong number = 145 - 1! + 4! + 5!
var n = 145;
var temp = n
var sum = 0
while (temp > 0) {
    var ld = temp % 10

    var fact = 1
    for (var i = 1 ; i <= ld ; i ++){
        fact *= i
    }
    sum += fact
    temp = Math.floor(temp/10)

}
if (sum == n) {
    console.log("Strong Number");
    
} else {
    console.log("Not Strong Number");
    
}

