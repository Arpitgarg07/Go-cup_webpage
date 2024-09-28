// /main/script.js
document.addEventListener("DOMContentLoaded", function () {
  // Fetch the navigation HTML from the nav folder
  fetch('..nav/nav.html')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.text();
      })
      .then(data => {
          // Insert the fetched nav HTML into the placeholder div
          document.getElementById('nav-placeholder').innerHTML = data;
      })
      .catch(error => {
          console.error('Error loading the navigation:', error);
      });
});








const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));



