/* While there was copy and pasting of the template code and regex's, I did write this code */

let phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
let emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
let zipCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/;

const stateAbbreviations = [
  'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
];

let form=null;
let successMsg=null;

function initValidation(formId, successId) {
  form = document.getElementById(formId);
  successMsg = document.getElementById(successId);

  let inputs = document.querySelectorAll("input");
  for (let input of inputs) {
    input.addEventListener("change", inputChanged );
  }
  form.addEventListener("submit", submitForm );
}

function inputChanged(ev) {
  let el = ev.currentTarget;
  validateForm();
  el.classList.add('was-validated');
}

function submitForm(ev) {
  console.log("in submit");
  let form=ev.currentTarget;
  ev.preventDefault();
  ev.stopPropagation();

  validateForm();

  if (!form.checkValidity()) {
    let inputs = document.querySelectorAll("input");
    for (let input of inputs) {
      input.classList.add('was-validated');
    }
  } else {
    form.style.display = 'none';
    successMsg.style.display = 'block';
  }
}

function validateForm() {
  checkRequired("first-name", "First Name is Required");
  checkRequired("last-name", "Last Name is Required");
  checkRequired("address", "Address is Required");
  checkRequired("city", "City is Required");
  if(checkRequired("state", "State is Required")){
    validateState("state", "Not a valid State, enter two digit code e.g., UT");
  }
  if (checkRequired("email", "Email Address is required")) {
    checkFormat("email", "Email format is invalid", emailRegex);
  }
  if (checkRequired("zip", "Zip Code is Required")) {
    checkFormat("zip", "Zip code format is invalid", zipCodeRegex);
  }
  if (checkRequired("phone", "Phone is required")) {
    checkFormat("phone", "Phone format is invalid", phoneRegex);
  }
  checkRequired("newspaper", "You must select at least one!");
}

function validateState(id, msg) {
  let el = document.getElementById(id);
  let valid = stateAbbreviations.includes(el.value.toUpperCase());
  setElementValidity(id, valid, msg);
}

function checkFormat(id, msg, regex) {
  let el = document.getElementById(id);
  let valid = regex.test(el.value);
  setElementValidity(id, valid, msg);
  return valid;
}

function checkRequired(id, message) {
  let el = document.getElementById(id);
  let valid = false;
  let type = el.type;
  switch (type) {
    case 'text':
    case 'password':
      valid = el.value.trim() !== '';
      break;
    case 'checkbox':
    case 'radio':
      let elements = document.querySelectorAll(`input[name=${el.name}]`);
      for (let element of elements) {
        if (element.checked) {
          valid = true;
          break;
        }
      }
      break;
  }
  setElementValidity(id, valid, message);
  return valid;
}

function setElementValidity(id, valid, message) {
  let el = document.getElementById(id);
  if (valid) {
    el.setCustomValidity('');
  } else {
    el.setCustomValidity(message);
    let errorDiv = document.getElementById(`${id}-error`);
    if (!errorDiv) {
      errorDiv = document.createElement('div');
      errorDiv.id = `${id}-error`;
      errorDiv.className = 'invalid-feedback';
      el.parentNode.insertBefore(errorDiv, el.nextSibling);
    }
    errorDiv.textContent = message;
  }
}
