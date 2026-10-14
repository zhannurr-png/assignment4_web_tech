const form = document.getElementById("registrationForm");
const inputs = form.querySelectorAll("input:not([type='checkbox']):not([type='radio']), select");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const genderInputs = form.querySelectorAll("input[name='gender']");
const genderFeedback = document.getElementById("genderFeedback");
const genderValidFeedback = document.getElementById("genderValidFeedback");

function validateInput(input) {
    if (input.checkValidity()) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }
}

function validatePasswordConfirmation() {
    if (password.value === confirmPassword.value && confirmPassword.value !== "") {
        confirmPassword.setCustomValidity("");
    } else {
        confirmPassword.setCustomValidity("Passwords must match.");
    }
    validateInput(confirmPassword);
}

function validateGender() {
    const selected = form.querySelector("input[name='gender']:checked");
    if (selected) {
        genderFeedback.style.display = "none";
        genderValidFeedback.style.display = "block";
    } else {
        genderFeedback.style.display = "block";
        genderValidFeedback.style.display = "none";
    }
}

inputs.forEach(function(input) {
    input.addEventListener("input", function() {
        validateInput(input);

        if (input === password || input === confirmPassword) {
            validatePasswordConfirmation();
        }
    });
});

genderInputs.forEach(function(input) {
    input.addEventListener("change", validateGender);
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    inputs.forEach(function(input) {
        validateInput(input);
    });

    validatePasswordConfirmation();
    validateGender();
});

form.addEventListener("reset", function() {
    inputs.forEach(function(input) {
        input.classList.remove("is-valid", "is-invalid");
        input.setCustomValidity("");
    });

    genderFeedback.style.display = "none";
    genderValidFeedback.style.display = "none";
});