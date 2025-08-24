// wap to print 1-10 using do while loop .
// var i = 1
// do {
//     console.log(i);
//     i++
    
// } while (i<=10);
// Armstrong no. using do while loop. 
let n = 153;
let temp = n
let count = 0
do {
    count++
    temp = Math.floor(temp/10)
} while (temp > 0);

temp = n
let sum = 0
let ld = 0
do {
    ld = temp %10
    sum += ld ** count
    temp = Math.floor(temp/10)

} while (temp > 0);

if (sum == n) {
    console.log("Armstrong Number");
}
else{
    console.log("Not Armstrong Number");
}


