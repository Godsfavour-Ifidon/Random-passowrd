const inputBox = document.querySelector(".input");
const btn = document.querySelector(".btn");
const copy = document.querySelector(".copy");
const done = document.querySelector(".done");
let length = 12;
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "@#$%^&*)(=+-_/?{},:";
const allChars = lowerCase + upperCase + numbers + symbols;

function createPassword() {
  let password = "";
  password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password = password + upperCase[Math.floor(Math.random() * upperCase.length)];
  password = password + symbols[Math.floor(Math.random() * symbols.length)];
  password = password + numbers[Math.floor(Math.random() * numbers.length)];
  while (length > password.length) {
    password = password + allChars[Math.floor(Math.random() * allChars.length)];
  }

  inputBox.value = password;
}

function copyText() {
  navigator.clipboard.writeText(inputBox.value);
  done.textContent = "Copied";
  setInterval(() => {
    done.textContent = "";
  }, 2000);

  inputBox.value = "";
}
copy.addEventListener("click", copyText);
btn.addEventListener("click", createPassword);
