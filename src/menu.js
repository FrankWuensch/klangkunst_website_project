document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("mobile-menu");
  const burger = document.getElementById("burger");
  const content = document.getElementById("content");
  const navLinks = document.querySelectorAll(".nav-link");
  if (menu && burger && content) {
    burger.addEventListener("click", function () {
      if (menu.classList.contains("opacity-0")) {
        for (let navLink of navLinks) {
          navLink.classList.remove("pointer-events-none");
        }
        menu.classList.add("flex");
        menu.classList.add("opacity-100");
        content.style.filter = "blur(0.25rem)";
      } else {
        for (let navLink of navLinks) {
          navLink.classList.add("pointer-events-none");
        }
        menu.classList.remove("flex");
        content.style.filter = "none"; // Reset the blur effect
        menu.classList.remove("opacity-100");
        menu.classList.add("opacity-0");
      }
    });
  }
});
