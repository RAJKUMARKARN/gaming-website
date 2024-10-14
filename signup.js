document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const termsCheckbox = document.getElementById("terms");
    const togglePasswordButton = document.getElementById("toggle-password");

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const termsAccepted = termsCheckbox.checked;

        if (!email || !password || !confirmPassword) {
            alert("All fields are required.");
            return false;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }

        if (!termsAccepted) {
            alert("You must agree to the terms and conditions.");
            return false;
        }

        // If all validations pass, submit the form
        signupForm.submit();
    });

    togglePasswordButton.addEventListener("click", function() {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        this.textContent = type === "password" ? "👁️" : "🙈";
    });
});
