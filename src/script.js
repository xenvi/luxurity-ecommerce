window.onscroll = function () {
  var nav = document.querySelector("nav");
  if (window.pageYOffset > 75) {
    nav.classList.add("stickynav");
  } else {
    nav.classList.remove("stickynav");
  }
};
