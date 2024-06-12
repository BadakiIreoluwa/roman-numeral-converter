const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
let error = false;

const roman = (x) => {
  //base case
  if (x === 0) {
    return "";
  }

  //recursive steps
  if (x >= 1000) {
    return "M" + roman(x - 1000);
  }
  if (x >= 900) {
    return "CM" + roman(x - 900);
  }
  if(x >= 500) {
    return "D" + roman(x - 500);
  }
  if (x >= 400) {
    return "CD" + roman(x - 400);
  }
  if (x >= 100) {
    return "C" + roman(x - 100);
  }
  if (x >= 90) {
    return "XC" + roman(x - 90);
  }
  if (x >= 50) {
    return "L" + roman(x - 50);
  }
  if (x >= 40) {
    return "XL" + roman(x - 40);
  }
  if (x >= 10) {
    return "X" + roman(x - 10);
  }
  if (x >= 9) {
    return "IX" + roman(x - 9);
  }
  if (x >= 5) {
    return "V" + roman(x - 5);
  }
  if (x >= 4) {
    return "IV" + roman(x - 4);
  }
  if (x >= 1) {
    return "I" + roman(x - 1);
  }
}

const checkInput = () => {
  const inputInt = parseInt(numberInput.value)

  if (!numberInput.value) {
    output.textContent = "Please enter a valid number";
    error = true;
  } else if (inputInt < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    error = true;
  } else if (inputInt > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
    error = true;
  } else {
    output.textContent = roman(inputInt);
    error = false; 
  }
  output.classList.remove("hidden");

  if (error) {
    output.classList.add("error");
  } else {
    output.classList.remove("error");
  }
}

convertBtn.addEventListener("click", checkInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput();
  }
})
