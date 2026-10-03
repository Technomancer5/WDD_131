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