/* I was late on my last submission and because of that am unsure of what to refactor so I will grade myself a C on refactoring JS code. */


/* Functions that move header with scroll */
window.addEventListener('scroll', function() {
  var header = document.getElementById('sticky-header');
  if (window.scrollY > 0) {
      header.classList.add('sticky');
  } else {
      header.classList.remove('sticky');
  }
});
window.addEventListener('resize', function() {
  var header = document.getElementById('sticky-header');
  var topOffset = header.getBoundingClientRect().top;
  if (topOffset <= 0) {
      header.classList.add('sticky');
  } else {
      header.classList.remove('sticky');
  }
});

/* Animation Code */
window.onload = function() {
  var jumpOutText = document.getElementById('jumpOutText');
  jumpOutText.classList.add('jump-out-text');
};

/* Change website section */
const home = document.getElementById('home');
const schedule = document.getElementById('schedule');
const services = document.getElementById('services');
const contact = document.getElementById('contact');

function showSection(sectionId) {
  home.style.display = 'none';
  schedule.style.display = 'none';
  services.style.display = 'none';
  contact.style.display = 'none';

  document.getElementById(sectionId).style.display = 'block';
}

/* Change page style - i've decided not to have a seperate page.js file due to style change only being one function.*/
function toggleStylesheet() {
  var stylesheet = document.getElementById('stylesheet');
  if (stylesheet.getAttribute('href') === 'css/styles.css') {
      stylesheet.setAttribute('href', 'css/alttheme.css');
  } 
  else {
      stylesheet.setAttribute('href', 'css/styles.css');
  }
}

/* Form Validation Call */
document.addEventListener("DOMContentLoaded", function() {
  initValidation("myform");
});
