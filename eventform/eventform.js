const form = document.querySelector("#ticketForm");

const typeSelect = document.querySelector("#type");
const eventDate = document.querySelector("#eventDate");

const conditionalField =
    document.querySelector("#conditionalField");

const conditionalLabel =
    document.querySelector("#conditionalLabel");

const conditionalInput =
    document.querySelector("#conditionalInput");

const errors =
    document.querySelector("#errors");

const ticket =
    document.querySelector("#ticket");


// Set minimum date to tomorrow
const today = new Date();

const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const tomorrowString =
    tomorrow.toISOString().split("T")[0];

eventDate.min = tomorrowString;


// Show Student I# or Access Code field
typeSelect.addEventListener("change", updateConditionalField);

function updateConditionalField() {
    const type = typeSelect.value;

    conditionalInput.value = "";

    if (type === "student") {
        conditionalField.hidden = false;

        conditionalLabel.textContent = "Student I#";

        conditionalInput.required = true;
        conditionalInput.inputMode = "numeric";
        conditionalInput.pattern = "[0-9]{9}";
        conditionalInput.maxLength = 9;

    } else if (type === "guest") {
        conditionalField.hidden = false;

        conditionalLabel.textContent = "Access Code";

        conditionalInput.required = true;
        conditionalInput.inputMode = "text";
        conditionalInput.pattern = "EVENT131";
        conditionalInput.maxLength = 8;

    } else {
        conditionalField.hidden = true;

        conditionalInput.required = false;
        conditionalInput.removeAttribute("pattern");
        conditionalInput.removeAttribute("maxlength");
    }
}


// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    errors.textContent = "";
    ticket.innerHTML = "";

    const firstName =
        form.firstName.value.trim();

    const lastName =
        form.lastName.value.trim();

    const email =
        form.email.value.trim();

    const type =
        form.type.value;

    const date =
        form.eventDate.value;

    const code =
        conditionalInput.value.trim();


    // Date must be later than today
    if (!date || date < tomorrowString) {
        errors.textContent =
            "Please choose an event date later than today.";
        return;
    }


    // Student must enter exactly 9 digits
    if (
        type === "student" &&
        !/^\d{9}$/.test(code)
    ) {
        errors.textContent =
            "Student I# must contain exactly 9 digits.";
        return;
    }


    // Guest must enter EVENT131
    if (
        type === "guest" &&
        code !== "EVENT131"
    ) {
        errors.textContent =
            "Access Code must be EVENT131.";
        return;
    }


    ticket.innerHTML = `
        <h2>Ticket Created</h2>
        <p>${firstName} ${lastName}</p>
        <p>${type}</p>
        <p>${date}</p>
    `;


    form.reset();

    conditionalField.hidden = true;
    conditionalInput.required = false;
});