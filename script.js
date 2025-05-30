document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Simple form validation and submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you for your message, ${name}! I will get back to you soon.`);
        // Here you would implement functionality to send messages to an API
        document.getElementById('contact-form').reset(); // Reset the form after submission
    }
});