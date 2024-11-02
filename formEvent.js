const form = document.querySelector("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("userpassword");
const termsCheckbox = document.getElementById("termsCheckbox");

const submitHandler = (event) => {
  //event.preventDefault();

  if (usernameInput.value.length > 3) {
    console.log("Form Submitted Successfully");
    usernameInput.value = "";
    passwordInput.value = "";
    termsCheckbox.checked = false;
  } else {
    console.log("Form is invalid");
  }
};

form.addEventListener("submit", submitHandler);

// Add focus and blur events
[usernameInput, passwordInput].forEach((input) => {
  input.addEventListener("focus", (e) => {
    e.target.style.borderColor = "blue"; // Highlight on focus
  });

  input.addEventListener("blur", (e) => {
    e.target.style.borderColor = ""; // Remove highlight on blur
  });
});

// Add input event to check validity as user types
usernameInput.addEventListener("input", () => {
  if (usernameInput.value.length < 3) {
    usernameInput.setCustomValidity("Username must be at least 3 characters.");
  } else {
    usernameInput.setCustomValidity(""); // Valid input
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 6) {
    passwordInput.setCustomValidity("Password must be at least 6 characters.");
  } else {
    passwordInput.setCustomValidity("");
  }
});

termsCheckbox.addEventListener("change", () => {
  if (termsCheckbox.checked) {
    console.log("User agreed to the Terms and Conditions.");
  } else {
    console.log("User has not agreed to the Terms and Conditions.");
  }
});

form.addEventListener("reset", () => {
  usernameInput.style.borderColor = "";
  passwordInput.style.borderColor = "";
  console.log("Form has been reset.");
});
