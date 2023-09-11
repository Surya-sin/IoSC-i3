const formBtn = document.querySelector(".contact-form-button");
const styleMeButton = document.getElementById("styleMeButton");
const themeToggle = document.getElementById("theme-toggle");

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData(document.querySelector("form"));
  console.log(formData);
});

styleMeButton.addEventListener("click", () => {
  styleMeButton.classList.toggle("clicked");
});

function toggleDarkTheme() {
  document.body.classList.toggle("dark-theme");
}

themeToggle.addEventListener("click", toggleDarkTheme);
