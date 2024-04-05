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

// Function to Validate a field
function validateField(input) {
    const fieldName = input.id;
    const value = input.value.trim();

    if (value === "") {
        showError(fieldName, "${fieldName} cannot be empty");
    } else {
        hideError(fieldName);
    }
}

// Function to validate all fields
function validateNonEmptyField(fieldName, displayName) {
    const value = document.getElementById(fieldName).value.trim();
    if (value == "") {
        showError(fieldName, "${displayName} cannot be empty");
    } else {
        hideError(fieldName);
    }
}

// Function to validate the email format
function validateEmailFormat(fieldName, email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError(fieldName, "Please enter a valid email address");
    } else {
        hideError(fieldName);
    }
}

// Function to validate the password format
function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@$!%*?&])[A-Za-z\d\-_@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        showError("password", "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character (-_@$!%*?&)");
    } else {
        hideError("password");
    }
}

// Function to validate the password confirmation
function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    if (confirmPassword == "") {
        showError("confirmPassword", "Confirm Password cannot be empty");
    } else if (password !== confirmPassword) {
        showError("confirmPassword", "Passwords do not match");
    } else {
        hideError("confirmPassword");
    }
}

// Function to validate the phone number including local and international
function validatePhoneNumber() {
    const phoneNumber = document.getElementById("phoneNumber").value;
    const phoneNumberRegex = /^(?:\+?\d{2,3}\s?)?(?:\d{2,4}\s?)?\d{6,8}$/;

    if (!phoneNumberRegex.test(phoneNumber)) {
        showError("phoneNumber", "Invalid phone number format");
    } else {    
        hideError("phoneNumber");
    }
}

// Function to show error messages
function showError (field, message) {
    const errorElement = document.getElementById('${field}Error');
    errorElement.innerHTML = message;
    errorElement.style.display = "block";

    const inputElement = document.getElementById(field);
    inputElement.classList.add("error-input");
}

// Function to hide error messages
function hideError(field) {
    const errorElement = document.getElementById('${field}Error');
    errorElement.style.display = "none";

    const inputElement = document.getElementById(field);
    inputElement.classList.remove("error-input");
}