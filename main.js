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

window.onload = function() {
  var jumpOutText = document.getElementById('jumpOutText');
  jumpOutText.classList.add('jump-out-text');
};

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


/*document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll("nav ul li, main section div ul li button");

  menuItems.forEach(function(item) {
    item.addEventListener("click", function(event) {
      event.preventDefault();

      const sections = document.querySelectorAll("section");
      sections.forEach(function(section) {
        section.style.display = "none";
      });

      let targetId;
      if (this.tagName === 'LI') {
        targetId = this.querySelector("a").getAttribute("href").substring(1);
      } else if (this.tagName === 'BUTTON') {
        targetId = this.querySelector("a").getAttribute("href").substring(1);
      }

      document.getElementById(targetId).style.display = "block";
    });
  });
});*/