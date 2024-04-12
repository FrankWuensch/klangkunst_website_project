document.addEventListener("DOMContentLoaded", function() {
    let navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(navLink) {
        if (navLink.href === window.location.href) {
            navLink.classList.add('active');
        }
    });
});