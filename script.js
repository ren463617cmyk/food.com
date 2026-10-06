    /* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================================
   MENU FILTER
========================================= */

const categoryButtons = document.querySelectorAll(".category");
const foodCards = document.querySelectorAll(".food-card");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.category;

        foodCards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});


/* =========================================
   ORDER BUTTON
========================================= */

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(button => {

    button.addEventListener("click", () => {

        const foodName = button.dataset.food;

        const phoneNumber = "919876543210";

        const message =
            `Hello Spice & Soul! 👋%0A%0A` +
            `I want to order: ${foodName}%0A%0A` +
            `Please share the details.`;

        const whatsappURL =
            `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappURL, "_blank");

    });

});


/* =========================================
   RESERVATION FORM
========================================= */

const reservationForm =
    document.getElementById("reservationForm");

reservationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you! 🎉\n\n" +
        "Your reservation request has been received.\n" +
        "Our team will contact you shortly."
    );

    reservationForm.reset();

});
