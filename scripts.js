const header = document.querySelector('.navbar');

window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');
    var navbarCollapse = document.querySelector('.navbar-collapse');
    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function () {
            navbarCollapse.classList.toggle('show');
        });
    });
});

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get all service cards
    const serviceCards = document.querySelectorAll('.service-card');

    // Find the maximum height among all service cards
    let maxHeight = 0;
    serviceCards.forEach(card => {
        const cardHeight = card.offsetHeight;
        if (cardHeight > maxHeight) {
            maxHeight = cardHeight;
        }
    });

    // Set the maximum height to all service cards
    serviceCards.forEach(card => {
        card.style.height = `${maxHeight}px`;
    });
});
