  // Constants and variables
const PI = 3.14;
let radius = 3;

let area = radius * radius * PI;

console.log("Area with radius 3:", area);

radius = 20;
area = radius * radius * PI;

console.log("Area with radius 20:", area);


// Type coercion
const one = 1;
const two = "2";

let result = one * two;

console.log("Implicit conversion:", result);

result = one + Number(two);

console.log("Explicit conversion:", result);


// Scope
let course = "WDD 131";

if (true) {
    let student = "John";

    console.log("Course inside block:", course);
    console.log("Student inside block:", student);
}

console.log("Course outside block:", course);