const $gnb = document.querySelector(".gnb");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    $gnb.style.transform = "translateY(0)";
  } else {
    $gnb.style.transform = "translateY(-100%)";
  }
});
