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
//// First Name
const firstInputEl = document.getElementById("first");
const errorFirstEl = document.querySelector(".first-error");
//// Last Name
const lastInputEl = document.getElementById("last");
const errorLastEl = document.querySelector(".last-error");
//// Email
const emailInputEl = document.getElementById("email");
const errorEmailEl = document.querySelector(".email-error");
//// Number of competion;
const quantityEl = document.getElementById("quantity");
const errorQuantityEl = document.querySelector(".quantity-error");
//// List of city
const listOfCityEl = document.querySelectorAll('input[name="location"]');
const errorCityEl = document.querySelector(".city-error");
/// terms of use
const termsOfUseEl = document.getElementById("checkbox1");
const errorTermsEl = document.querySelector(".terms-error");

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
  // check if there is a number of competion
  checkValidation(
    quantityEl.value != "" &&
      !isNaN(+quantityEl.value) &&
      Number.isInteger(+quantityEl.value),
    errorQuantityEl
  );
  // check if at least one city is selected;

  let cityName;

  listOfCityEl.forEach((city) => (city.checked ? (cityName = city.value) : ""));

  console.log(cityName);

  checkValidation(cityName, errorCityEl);

  // check if the terms of use are checked
  checkValidation(termsOfUseEl.checked, errorTermsEl);

  // if the number of errors are above 0 the form is not submitted
  if (numberOfError > 0) return;

  // if there is no error reset and close the form
  formEl.reset();
  closeModal();
};

formEl.addEventListener("submit", formValidation);
