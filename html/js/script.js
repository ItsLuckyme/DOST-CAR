const buttons = document.querySelectorAll(".main-buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (button.textContent === "Research and Development Projects") {
      return;
    }
    if (button.textContent === "Researchers") {
      return;
    }
    if (button.textContent === "Institutions") {
      return;
    }
    if (button.textContent === "R&D Facilities") {
      return;
    }
    if (button.textContent === "IP Rights and Patents") {
      return;
    }

    alert("Button clicked: " + button.textContent);
  });
});