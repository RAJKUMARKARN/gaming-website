document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const togglePasswordButton = document.getElementById("toggle-password");
  
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
        if (!username.value || !password.value) {
            alert('Please fill the required fields.');
        } else {
            alert('Form submitted');
            // form.submit(); // Remove this line if you handle form submission manually
        }
    });
  
    togglePasswordButton.addEventListener("click", () => {
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
        togglePasswordButton.textContent = type === "password" ? "👁️" : "🙈";
    });
  });
  