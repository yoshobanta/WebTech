let score = 80;

if (score > 90 && score <= 100) {
    console.log("A+");
} else if (score > 80 && score <= 90) {
    console.log("A");
} else if (score > 70 && score <= 80) {
    console.log("B+");
} else if (score > 60 && score <= 70) {
    console.log("B");
} else if (score > 50 && score <= 60) {
    console.log("C+");
} else if (score > 40 && score <= 50) {
    console.log("D+");
} else if (score > 32 && score <= 40) {
    console.log("D");
} else if (score <= 32 && score >= 0) {
    console.log("Papa ka belt");
} else {
    console.log("Enter a valid number between 0 - 100");
}
