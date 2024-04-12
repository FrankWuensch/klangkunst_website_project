document.addEventListener("DOMContentLoaded", function(){
  const menu = document.getElementById("menu");
  const burger = document.getElementById("burger");
  const content = document.getElementById("content");

  if (menu && burger && content) {
    burger.addEventListener("click", function () {
      menu.classList.toggle("hidden");

      if (!menu.classList.contains("hidden")) {
        menu.classList.add("flex");
        content.style.filter = "blur(0.5rem)";
      } else {
        menu.classList.remove("flex");
        content.style.filter = "none"; // Reset the blur effect
      }
    });
  }
});
