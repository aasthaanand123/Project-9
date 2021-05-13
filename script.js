const inputUser = document.querySelector("input");
const button = document.querySelector("button");
let error = document.querySelector(".error");
button.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputUser.value === "" ||
    !(inputUser.value.includes("@") && inputUser.value.includes("."))
  ) {
    inputUser.classList.remove("green");
    inputUser.classList.add("red");
    inputUser.style.backgroundImage = "url('/images/icon-error.svg')";
    if (inputUser.value === "") {
      error.textContent = "Whoops! It looks like you forgot to add your email";
      error.classList.remove("none");
    } else {
      error.textContent = "Please provide a valid email";
      error.classList.remove("none");
    }
  } else {
    if (
      inputUser.classList.contains("red") &&
      !error.classList.contains("none")
    ) {
      inputUser.classList.remove("red");
      error.classList.add("none");
      inputUser.style.backgroundImage = "none";
      inputUser.classList.add("green");
    } else {
      if (inputUser.classList.contains("green")) {
        inputUser.classList.remove("green");
      }
    }
  }
  inputUser.value = "";
});
