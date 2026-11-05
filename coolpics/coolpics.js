const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    navigation.classList.toggle("hide");
}


const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".viewer");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");

gallery.addEventListener("click", openModal);

function openModal(event) {
    if (event.target.tagName !== "IMG") {
        return;
    }

    const image = event.target;
    const fullImage = image.src.replace("sm", "full");

    modalImage.src = fullImage;
    modalImage.alt = image.alt;

    modal.showModal();
}


// Close with X
closeButton.addEventListener("click", () => {
    modal.close();
});


// Close by clicking the modal overlay
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});