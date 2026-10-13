const form = document.getElementById("contactForm");
const inputs = form.querySelectorAll("input, textarea");

function validateInput(input) {
    if (input.checkValidity()) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }
}

inputs.forEach(function(input) {
    input.addEventListener("input", function() {
        if (
            form.classList.contains("was-validated") ||
            input.classList.contains("is-invalid") ||
            input.classList.contains("is-valid")
        ) {
            validateInput(input);
        }
    });
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    form.classList.add("was-validated");

    inputs.forEach(function(input) {
        validateInput(input);
    });
});