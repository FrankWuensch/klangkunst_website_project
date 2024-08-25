document.addEventListener("DOMContentLoaded", function () {
  const currentTheme = localStorage.theme;

  const menu = document.getElementById("mobile-menu");
  const btn_light = menu.querySelector("#light-mode");
  const btn_dark = menu.querySelector("#dark-mode");
  const light_switch = document.querySelector("#light-mode-btn");
  const dark_switch = document.querySelector("#dark-mode-btn");

  // Set the theme based on the stored value, if available
  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  if (btn_light) {
    btn_light.addEventListener("click", () => {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    });
  }

  if (btn_dark) {
    btn_dark.addEventListener("click", () => {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    });
  }

  if (light_switch) {
    light_switch.addEventListener("click", () => {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    });
  }

  if (dark_switch) {
    dark_switch.addEventListener("click", () => {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    });
  }
});
