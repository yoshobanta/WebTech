const readline = require('readline')

const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

r1.question("Enter a number", function(answer){
    const num = Number(answer);

    if (num % 2 == 0){
        console.log("Even number");
    }
    else
        console.log("Not a even number");
    
    r1.close();
});