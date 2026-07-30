const form = document.querySelector(".form");
const fullNameInput = document.querySelector("#full-name");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

const registerBtn = document.querySelector(".register");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

registerBtn.addEventListener("click", () => {
  if (fullNameInput.value === "") {
    alert("Please enter your name!");
  } else if (usernameInput.value === "") {
    alert("Please enter your username!");
  } else if (emailInput.value === "") {
    alert("Please eneter your email!");
  } else if (passwordInput.value === "") {
    alert("Please enter your password!");
  } else if (confirmPasswordInput.value === "") {
    alert("Please confirm your password!");
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Your password do not match!");
  } else {
    const name = fullNameInput.value;
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirm = confirmPasswordInput.value;

    const userData = {
      name,
      username,
      email,
    };

    saveToLocal(userData);

    alert("Thanks for signing up!");
  }
});

function saveToLocal(userData) {
  localStorage.setItem("registeredUser", JSON.stringify(userData));
  alert("Successfully saved!");
}

function getFromLocalStorage() {
  const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

  if (savedUser) {
    console.log(savedUser.name);
  }
}

getFromLocalStorage();