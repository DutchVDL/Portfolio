const button = document.querySelector(".contact-btn");
const form = document.querySelector(".form");

const about = document.querySelector(".about");
button.addEventListener("click", function () {
  if (form.style.display == "none") {
    form.style.display = "flex";

    about.style.display = "block";
    button.style.top = `${70}%`;
  } else if (form.style.display != "none") {
    form.style.display = "none";
    about.style.display = "none";
    button.style.top = `${0}`;
  }
});
