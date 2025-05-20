const form = document.querySelector(".php-email-form"),
    statusmessage = form.querySelector(".button-area span");

form.onsubmit = (e) => {
    e.preventDefault(); // Prevent actual form submission
    statusmessage.style.color = "#000000"; // Set message color
    statusmessage.style.display = "block"; // Show message
    statusmessage.innerText = "Sending your message...."; // Display sending message
    form.classList.add("disabled"); // Disable form to prevent multiple submissions

    // Simulate a delay for sending the message
    setTimeout(() => {
        // Simulate validation and success response
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        if (!email || !message) {
            statusmessage.innerText = "Email and message field is required!";
            statusmessage.style.color = "black"; // Error color
        } else if (!validateEmail(email)) {
            statusmessage.innerText = "Enter a valid email address!";
            statusmessage.style.color = "black"; // Error color
        } else {
            statusmessage.innerText = "Your message has been sent!"; // Display success message
            statusmessage.style.color = "black"; // Change text color for success
            form.reset(); // Reset form fields (optional)
        }

        form.classList.remove("disabled"); // Re-enable form
    }, 1500); // Simulated delay of 2 seconds
}

// Simple email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for basic email validation
    return re.test(email);
}