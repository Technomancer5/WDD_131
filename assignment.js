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

const selectElem = document.getElementById("webdevlist");

selectElem.addEventListener("change", function () {
    const codeValue = selectElem.value;
    console.log(codeValue);
});

const themeSelect = document.querySelector("#theme-select");
const pageContent = document.querySelector("body");

themeSelect.addEventListener("change", changeTheme);

function changeTheme() {
    const current = themeSelect.value;

    pageContent.classList.remove(
        "theme-active",
        "theme-ocean",
        "theme-forest",
        "theme-desert"
    );

    if (current === "ocean") {
        pageContent.classList.add("theme-active", "theme-ocean");
    } else if (current === "forest") {
        pageContent.classList.add("theme-active", "theme-forest");
    } else if (current === "desert") {
        pageContent.classList.add("theme-active", "theme-desert");
    }
}