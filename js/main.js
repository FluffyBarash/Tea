const button = document.querySelector(".menu__button");
const menu_windows = document.querySelector(".menu_windows");
const cross = document.querySelector(".cross");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  menu_windows.style.transform = "translateX(0px)";
  body.style.overflow = "hidden";
});

cross.addEventListener("click", () => {
  menu_windows.style.transform = "translateX(-1000px)";
  menu_windows.style.transition = "all 2s ease";
  body.style.overflow = "auto";
});
