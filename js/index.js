// Function to set up the form toggle functionality
function setupFormToggle() {
    const buttons = document.querySelectorAll(".bottom .btn");
  
    const sections = document.querySelectorAll(".form");

    // Function to remove "active" class from all buttons and add "active" class to the specified button
    function activateButton(button) {
        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
    }

    // Function to remove "active" class from all form sections and add "active" class to the specified section
    function activateSection(section) {
        sections.forEach((sec) => sec.classList.remove("active"));
          // Add "active" class to the specified section
          section.classList.add("active");
    }

    function handleClick(event) {
        // Get the clicked button 
        const button = event.currentTarget;
    
        // Retrieve the value of the "data-btn"
        const targetSectionClass = button.dataset.btn;
    
        // Activate the clicked button (set as "active") and deactivate other buttons
        activateButton(button);
    
        // Find the corresponding form section based on the class name obtained from the "data-btn" attribute
        const targetSection = document.querySelector(`.${targetSectionClass}`);
    
        // Activate the related form section (set as "active") and deactivate other sections
        activateSection(targetSection);
    }

    // Add a click event listener to each button and call the "handleClick"
    buttons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });
  }

// Add an event listener to the "DOMContentLoaded" event of the document and call the "setupFormToggle" function once the document is fully loaded
document.addEventListener("DOMContentLoaded", setupFormToggle);

// Toggle Password visibilitiy
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password");
    const passwordToggle = document.getElementById("passwordToggle");
    const passwordIcon = passwordToggle.querySelector("i");

    passwordToggle.addEventListener("click", function() {
        const isPasswordVisible = passwordInput.type == "text";

        passwordInput.type = isPasswordVisible ? "password" : "text";  
        passwordIcon.classList.toggle("fa-eye", !isPasswordVisible);
        passwordIcon.classList.toggle("fa-eye-slash", isPasswordVisible);

    });
});

// Function to get the active form selection
function getActiveSection(){
    return document.querySelector(".form.active");
}

// Function to get the active form's input fields
function getActiveInputs(){
    const activeForm = getActiveSection();
    return activeForm ? activeForm.querySelectorAll("input") : [];
}