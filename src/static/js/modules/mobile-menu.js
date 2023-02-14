export function menuRegisterClick() {
  const menuBtn = document.querySelector(".l-menu-button");
  const menuGrid = document.querySelector(".l-header-content");

  // const html = document.querySelector("html");
  const body = document.querySelector("body");

  let menuClosed = true;
  menuBtn.addEventListener("click", function () {
    body.classList.toggle("noscroll");
    menuGrid.classList.toggle("l-header-active");
    menuClosed = !menuClosed;
  });
}
