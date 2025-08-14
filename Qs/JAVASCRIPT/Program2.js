// Write a script to perform a switch calculator operation .

let operator = "*"
switch (operator) {
    case "+":
        console.log(100 + 20);
        break;
    case "-":
        console.log(100 - 20);
        break;
    case "*":
        console.log(100 * 20);
        break;
    case "/":
        console.log(100 / 20);
        break;

    default:
        console.log("Enter a valid expression");
        break;
}