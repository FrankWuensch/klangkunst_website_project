document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("mobile-menu");
  const burger = document.getElementById("burger");
  const content = document.getElementById("content");
  const images = document.querySelectorAll("img.clickable");
  if (menu && burger && content) {
    burger.addEventListener("click", (evt) => {
      if (menu.classList.contains("opacity-0")) {
        console.log(evt.target);
        openMenu();
      } else {
        closeMenu();
      }
    });
  }
  content.addEventListener("click", (evt) => {
    if (!menu.classList.contains("opacity-0")) {
      closeMenu();
    }
  })
  const openMenu = () => {
    menu.classList.add("flex");
    menu.classList.add("opacity-100");
    menu.classList.remove("opacity-0");
    menu.classList.remove("pointer-events-none");
    content.style.filter = "blur(0.25rem)";
    images.forEach(image => {
      image.classList.add("pointer-events-none");
    })
  };
  const closeMenu = () => {
    menu.classList.remove("flex");
    menu.classList.remove("opacity-100");
    menu.classList.add("opacity-0");
    menu.classList.add("pointer-events-none");
    content.style.filter = "none";
    images.forEach(image => {
      image.classList.remove("pointer-events-none");
    })
  };
});
