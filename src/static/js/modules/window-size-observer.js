// Usage: if (currentMode !== WindowSizeEnum.COMPUTER) { ... }
// Don't overwrite currentMode in other places
const WindowSizeEnum = Object.freeze({
  SMALL_MOBILE: 1,
  MOBILE: 375,
  TABLET: 670,
  COMPUTER: 1014,
});
function getCurrentMode() {
  if (window.innerWidth < 375) {
    return WindowSizeEnum.SMALL_MOBILE;
  } else if (window.innerWidth < 670) {
    return WindowSizeEnum.MOBILE;
  } else if (window.innerWidth < 1014) {
    return WindowSizeEnum.TABLET;
  } else {
    return WindowSizeEnum.COMPUTER;
  }
}
let currentMode = getCurrentMode();

if (typeof ResizeObserver !== "undefined") {
  new ResizeObserver(() => {
    currentMode = getCurrentMode();
  }).observe(document.body);
}

export { currentMode, WindowSizeEnum };
