document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Clear previous errors
        clearErrors();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate form inputs
        let isValid = true;
        
        if (name === '') {
            showError('name-error', 'Name is required.');
            isValid = false;
        }

        if (email === '') {
            showError('email-error', 'Email is required.');
            isValid = false;
        } else if (!validateEmail(email)) {
            showError('email-error', 'Invalid email format.');
            isValid = false;
        }

        if (message === '') {
            showError('message-error', 'Message is required.');
            isValid = false;
        }

        if (isValid) {
            // Create a user object
            const user = {
                name: name,
                email: email,
                message: message
            };

            // Log the user object (or handle it as needed)
            console.log('Form submitted:', user);

            // Optionally, clear the form fields
            form.reset();
        }
    });

    // Function to show error messages
    function showError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }

    // Function to clear error messages
    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.textContent = '');
    }

    // Function to validate email format
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
