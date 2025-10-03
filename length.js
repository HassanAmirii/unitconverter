document.addEventListener("DOMContentLoaded", async () => {
  const app = document.getElementById("app");
  const form = document.getElementById("form");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // get all important value

    const lengthInput = document.getElementById("lengthInput").value.trim();
    const inputValue = parseFloat(lengthInput);
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = document.getElementById("unitTo").value;
    // HAndle potential error
    if (lengthInput === "" || isNaN(inputValue)) {
      return (errorMessage.innerHTML = `please only input numbers`);
    } else if (unitFrom === "feet" && unitTo === "feet") {
      return (errorMessage.innerHTML = `cant convert same unit!, kindly reselect`);
    }
    errorMessage.innerHTML = "";

    let result = 0;
    let resultunit = "";

    if (
      (unitFrom === "feet" && unitTo === "inches") ||
      (unitFrom === "inches" && unitTo === "feet")
    ) {
      if (unitFrom === "feet") {
        result = inputValue * 12;
        resultunit = "in";
      } else {
        result = inputValue / 12;
        resultunit = "ft";
      }
      app.innerHTML = `  <div>
        <p>Result of your calculation</p>
     <p>${lengthInput} ${unitFrom}  = ${result} ${resultunit} </p>
        <button id="resetButton">Reset</button>
    </div>`;
    }
    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", (event) => {
      window.location.href = "length.html";
    });
  });
});
