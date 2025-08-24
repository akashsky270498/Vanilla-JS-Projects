const form = document.getElementById("registerForm");
const inputs = form.querySelectorAll("input");

const validators = {
  username: (value) => value.trim() !== "" || "Username is required",
  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Email is not valid",
  password: (value) =>
    value.length >= 8 || "Password must be at least 8 characters long",
  confirmPassword: (value) => {
    const password = form.querySelector("#password").value;
    return value === password || "Passwords do not match";
  },
};

const showError = (input, message) => {
  const formGroup = input.closest(".formGroup");
  const errorMsg = formGroup.querySelector(".errorMessage");

   if (!errorMsg) return;

  if (message === true) {
    errorMsg.textContent = "";
    input.style.borderColor = "green";
  } else {
    errorMsg.textContent = message;
    input.style.borderColor = "red";
  }
};

const validateInput = (input) => {
  const rule = validators[input.name];
  if (!rule) return;

  const isValid = rule(input.value);
  showError(input, isValid);
  return isValid === true;
};

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    validateInput(input);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isFormValid = true;
  inputs.forEach((input) => {
    const valid = validateInput(input);
    if (!valid) isFormValid = false;
  });

  if (isFormValid) {
    alert("Form submitted successfully");
    form.reset();

    inputs.forEach((input) => (input.style.borderColor = "#ccc"));
  }
});
