const toggleThemeBtn = document.getElementById("toggleTheme");
const colorInput = document.getElementById("colorInput");
const previewBox = document.getElementById("previewBox");

// Function: Toggle Dark/Light Theme
const toggleTheme = () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

//Function: Apply saved theme on reload
const applySavedTheme = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
};

//Function: Change preview box color
const changeColor = (e) => {
  const selectedColor = e.target.value;
  previewBox.style.background = selectedColor;
  document.documentElement.style.setProperty("--primary-color", selectedColor);
  localStorage.setItem("color", selectedColor);
};

//Function: Apply saved color on reload
const applySavedColor = () => {
  const savedColor = localStorage.getItem("color");
  if (savedColor) {
    previewBox.style.background = savedColor;
    colorInput.value = savedColor;
    document.documentElement.style.setProperty("--primary-color", savedColor);
  }
};


//Event Listeners
toggleThemeBtn.addEventListener("click", toggleTheme);
colorInput.addEventListener("input", changeColor);

window.addEventListener("DOMContentLoaded", () => {
    applySavedTheme();
    applySavedColor();
})
