// High Order Function
function happy(a,b) {
    b()
    console.log(a);
}
function sad() {
    console.log("Hello");
}
happy("Yosho",sad)

// High Order Function - happy
// Callback Function - sad
