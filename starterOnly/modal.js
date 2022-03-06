const editNav = () => {
  let navEl = document.getElementById("myTopnav");
  if (navEl.className === "topnav") {
    navEl.className += " responsive";
  } else {
    navEl.className = "topnav";
  }
};

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const formEl = document.querySelector(".form");
const firstInputEl = document.getElementById("first");
const errorFirstEl = document.querySelector(".first-error");
const lastInputEl = document.getElementById("last");
const errorLastEl = document.querySelector(".last-error");
const emailInputEl = document.getElementById("email");
const errorEmailEl = document.querySelector(".email-error");

// launch modal form
const launchModal = () => {
  modalbg.style.display = "block";
};

// close modal form
const closeModal = () => {
  modalbg.style.display = "none";
};

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCloseBtn.addEventListener("click", closeModal);

// from validation

//// show error function
const showError = (errorEl) => {
  errorEl.style.display = "block";
};

//// hide error function
const hideError = (errorEl) => {
  errorEl.style.display = "none";
};

// regex patern

const nameRegex = /^[a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ-]{2,}$/i;

const emailRegex = /^([a-z\d\._-]+)@([a-z\d-_]+)\.([a-z]+)(\.[a-z]+)?$/;

// validation conditions

const formValidation = (e) => {
  // prevent the form from submitting
  e.preventDefault();

  // initialize the number of error
  let numberOfError = 0;

  //// Check the validation of the input or the box

  const checkValidation = (condition, errorEl) => {
    if (!condition) {
      numberOfError++;
      return showError(errorEl);
    }

    hideError(errorEl);
  };

  // check if first name has at least 2 charactères
  checkValidation(nameRegex.test(firstInputEl.value.trim()), errorFirstEl);
  // check if first name has at least 2 charactères
  checkValidation(nameRegex.test(lastInputEl.value.trim()), errorLastEl);
  // check if the email is valid
  checkValidation(emailRegex.test(emailInputEl.value.trim()), errorEmailEl);
};

formEl.addEventListener("submit", formValidation);
