// Responsive Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can add additional validation or send the data to a server here

    // For demonstration purposes, just alert the form data
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // You can also reset the form after submission
    contactForm.reset();
});