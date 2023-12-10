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

document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {

            event.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            var offsetTop = targetSection.offsetTop;

            var newOffsetTop = offsetTop - 100;

            window.scrollTo({
                top: newOffsetTop,
                behavior: 'smooth'
            });
        });
    });
});
