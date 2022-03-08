// DOM Elements
const navEl = document.getElementById("myTopnav");
const modalThanks = document.querySelector(".modal-thanks-container");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const modalThanksCloseBtn = document.querySelector(".btn-thanks");
const formEl = document.querySelector(".form");
//// First Name
const firstInputEl = document.getElementById("first");
//// Last Name
const lastInputEl = document.getElementById("last");
//// Email
const emailInputEl = document.getElementById("email");
//// Number of competion;
const quantityEl = document.getElementById("quantity");
//// List of city
const listOfCityEl = document.querySelectorAll('input[name="location"]');
/// terms of use
const termsOfUseEl = document.getElementById("checkbox1");

// function that toggle the navigation on mobile
const editNav = () => {
  if (navEl.className === "topnav") {
    return (navEl.className += " responsive");
  }
  navEl.className = "topnav";
};

// launch modal form
const launchModal = () => {
  if (navEl.className === "topnav responsive") {
    editNav();
  }
  // prevent the scrolling of the page
  document.body.style.overflow = "hidden";
  // display the modal
  modalbg.style.display = "block";
  // scroll to the top
  window.scrollTo(0, 0);
};

// close modal form
const closeModal = () => {
  // if the thanks message is currently in display hide it and display the form instead
  if ((modalThanks.classList.contains = "open")) {
    modalThanks.style.display = "none";
    modalThanks.classList.remove = "open";
    formEl.classList.add = "open";
    formEl.style.display = "block";
    // allow the scolling of the page
    document.body.style.overflow = "scroll";
  }

  // close the overlay and the modal

  modalbg.style.display = "none";
};

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCloseBtn.addEventListener("click", closeModal);
modalThanksCloseBtn.addEventListener("click", closeModal);

// from validation

//// show error function
const showError = (element) => {
  element.closest(".formData").dataset.errorVisible = true;
};

//// hide error function
const hideError = (element) => {
  element.closest(".formData").dataset.errorVisible = null;
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

  const checkValidation = (condition, element) => {
    if (!condition) {
      numberOfError++;
      return showError(element);
    }

    hideError(element);
  };

  // check if first name has at least 2 charactères
  checkValidation(nameRegex.test(firstInputEl.value.trim()), firstInputEl);
  // check if first name has at least 2 charactères
  checkValidation(nameRegex.test(lastInputEl.value.trim()), lastInputEl);
  // check if the email is valid
  checkValidation(emailRegex.test(emailInputEl.value.trim()), emailInputEl);
  // check if there is a number of competion
  checkValidation(
    quantityEl.value != "" &&
      !isNaN(+quantityEl.value) &&
      Number.isInteger(+quantityEl.value),
    quantityEl
  );
  // check if at least one city is selected;

  let cityName;

  listOfCityEl.forEach((city) => (city.checked ? (cityName = city.value) : ""));

  checkValidation(cityName, listOfCityEl[0]);

  // check if the terms of use are checked
  checkValidation(termsOfUseEl.checked, termsOfUseEl);

  // if the number of errors are above 0 the form is not submitted
  if (numberOfError > 0) return;

  // if there is no error reset and close the form
  formEl.reset();
  formEl.style.display = "none";
  formEl.classList.remove = "open";
  modalThanks.classList.add = "open";
  modalThanks.style.display = "flex";
};
// trigger the formvalidation when the form is submited
formEl.addEventListener("submit", formValidation);
