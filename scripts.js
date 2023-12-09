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