// Add an event listener to the navigation links for smooth scrolling
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
  
    navLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
  
        const targetSection = document.querySelector(this.getAttribute("href"));
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });
  });
  
  // Add an event listener to the form submission
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // You can handle the form submission here
      // Retrieve the values from the form fields using the DOM API
      const nameInput = document.querySelector('input[type="text"]');
      const emailInput = document.querySelector('input[type="email"]');
      const inquirySelect = document.querySelector("select");
      const messageTextarea = document.querySelector("textarea");
  
      const name = nameInput.value;
      const email = emailInput.value;
      const inquiryType = inquirySelect.value;
      const message = messageTextarea.value;
  
      // Perform any necessary validation or processing
      // Send the form data to the server using AJAX or other methods
  
      // Clear the form fields
      nameInput.value = "";
      emailInput.value = "";
      inquirySelect.value = "";
      messageTextarea.value = "";
  
      // Show a success message or perform any other action
      alert("Form submitted successfully!");
    });
  });
  