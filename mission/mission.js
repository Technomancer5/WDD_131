const modeSelect = document.querySelector("#mode-select");
const page = document.querySelector("body");
const logo = document.querySelector("#byui-logo");

const lightLogo = "images/BYUI_logo.png";
const darkLogo = "images/byui-logo-white.png";

modeSelect.addEventListener("change", changeMode);

function changeMode() {
    const mode = modeSelect.value;

    if (mode === "dark") {
        page.classList.add("dark");
        logo.src = darkLogo;
    } else {
        page.classList.remove("dark");
        logo.src = lightLogo;
    }
}