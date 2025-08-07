// 1. String
let a = "Hello";
console.log(typeof(a));  

// 2. Number
let b = 123456789123456789123;
console.log(b);
console.log(typeof(b));  
// Range -(2^53 - 1) to 2^53

// 3. Boolean
let c = true;
console.log(typeof(c));  

// 4. Undefined
let d;
console.log(typeof(d));  

// 5. Null
let e = null;
console.log(typeof(e));  // Output: "object" (this is a known JavaScript quirk)

// 6. BigInt
let f = 900719925474099n;  // Note the 'n' at the end
console.log(typeof(f));
