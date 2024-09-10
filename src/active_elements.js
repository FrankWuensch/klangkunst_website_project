document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const home = navLinks[0];
    const homeLink = home.href.toString().replace('index.html', '');
    let actualLink = window.location.href.toString();
    navLinks.forEach(function(navLink) {
        if (navLink.href === actualLink) {
            navLink.classList.add('active');
            navLink.classList.remove('dark:text-white/40');
        } else {
            navLink.classList.remove("active");
        }
        console.log(`${actualLink} vs ${homeLink}`);
        if (actualLink === homeLink) {
            home.classList.add('active');
            home.classList.remove('dark:text-white/40');
        }
    });
});