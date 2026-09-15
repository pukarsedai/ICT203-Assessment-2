/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
}


/* =========================
   SERVICE BUTTONS
========================= */

const serviceButtons = document.querySelectorAll(".learn-more");

serviceButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const serviceName = button.dataset.service;

        alert(
            serviceName +
            " is one of our professional technology services. " +
            "Please contact us for more information."
        );

    });

});


/* =========================
   FAQ ACCORDION
========================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const answer = question.nextElementSibling;

        answer.classList.toggle("show");

    });

});


/* =========================
   CONTACT FORM VALIDATION
========================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");
        const formMessage = document.getElementById("formMessage");

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        formMessage.textContent = "";

        let valid = true;

        if (name.length < 2) {
            nameError.textContent =
                "Please enter your full name.";
            valid = false;
        }

        if (!email.includes("@")) {
            emailError.textContent =
                "Please enter a valid email address.";
            valid = false;
        }

        if (message.length < 10) {
            messageError.textContent =
                "Message must contain at least 10 characters.";
            valid = false;
        }

        if (valid) {

            formMessage.textContent =
                "Thank you! Your message has been submitted successfully.";

            contactForm.reset();

        }

    });

}