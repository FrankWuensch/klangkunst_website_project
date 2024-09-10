document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("mobile-menu");
  const burger = document.getElementById("burger");
  const content = document.getElementById("content");
  const navLinks = menu.querySelectorAll(".nav-link");
  if (menu && burger && content) {
    burger.addEventListener("click", function (evt) {
      if (menu.classList.contains("opacity-0")) {
        console.log(evt.target);
        openMenu();
      } else {
        closeMenu();
      }
    });
  }
  const openMenu = () => {
    menu.classList.add("flex");
    menu.classList.add("opacity-100");
    content.classList.add("pointer-events-none");
    menu.classList.remove("opacity-0");
    menu.classList.remove("pointer-events-none");
    content.style.filter = "blur(0.25rem)";
  };
  const closeMenu = () => {
    menu.classList.remove("flex");
    menu.classList.remove("opacity-100");
    content.classList.remove("pointer-events-none");
    menu.classList.add("opacity-0");
    menu.classList.add("pointer-events-none");
    content.style.filter = "none"; // Reset the blur effect
  };
});
