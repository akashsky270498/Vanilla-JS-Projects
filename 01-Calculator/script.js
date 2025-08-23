const screen = document.getElementById("screen");

const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;

    if (action === "clear") {
      currentInput = "";
      screen.value = "";
    } else if (action === "delete") {
      currentInput = currentInput.slice(0, -1);
      screen.value = currentInput;
    } else if (action === "=") {
      try {
        currentInput = Function(`return ${currentInput}`)().toString();
        screen.value = currentInput;
      } catch (error) {
        screen.value = "Error";
        currentInput = "";
      }
    } else {
      currentInput += action;
      screen.value = currentInput;
    }
  });
});
