const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

/* Modal Items */
const modal = document.getElementById("email-modal");
const openBtn = document.querySelector("#signup");
const closeBtn = document.querySelector(".close-btn");

//click events
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

//Form Validation
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("tel");

//Show error message
function showError(input, message) {
  const formValidation = input.parentElement;
  formValidation.className = "form-validation error";

  const errorMessage = formValidation.querySelector("p");
  errorMessage.innerText = message;
}

//Show valid message
function showValid(input) {
  const formValidation = input.parentElement;
  formValidation.className = "form-validation valid";
}

//check requred fields
function checkRequred(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showValid(input);
    }
  });
}

//check input for numbers
function checkNumbers(input) {
  if (isNaN(input.value)) {
    showError(input, `${getFieldName(input)} must be a nuber`);
  }
}

//get fieldname
function getFieldName(input) {
  return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

//Event Listeners
form.addEventListener("submit", (/* e */) => {
  /* e.preventDefault(); */

  checkRequred([name, email, tel]);
  checkNumbers(tel);
});
