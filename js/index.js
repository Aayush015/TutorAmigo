// Function to set up the form toggle functionality
function setupFormToggle() {
    // Select all elements with the class "btn" inside elements with the class "bottom"
    const buttons = document.querySelectorAll(".bottom .btn");
  
    // Select all elements with the class "form"
    const sections = document.querySelectorAll(".form");
    function activateButton(button) {
      // Remove "active" class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));
  
      // Add "active" class to the specified button
      button.classList.add("active");
    }
    // Function to remove "active" class 
    function activateSection(section) {
      // Remove "active" class from all form sections
      sections.forEach((sec) => sec.classList.remove("active"));
  
      // Add "active" class to the specified section
      section.classList.add("active");
    }
    // Event handler function for the button click event
    function handleClick(event) {
      // Get the clicked button and assign it to the "button" variable
      const button = event.currentTarget;
  
      // Retrieve the value of the "data-btn" attribute from the clicked button
      const targetSectionClass = button.dataset.btn;
  
      // Activate the clicked button (set as "active") and deactivate other buttons
      activateButton(button);
  
      // Find the corresponding form section based on the class name
      const targetSection = document.querySelector(`.${targetSectionClass}`);
  
      // Activate the related form section (set as "active") and deactivate other sections
      activateSection(targetSection);
    }
    // Add a click event listener to each button
    buttons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });
  }
  // Add an event listener to the "DOMContentLoaded" event of the document
  document.addEventListener("DOMContentLoaded", setupFormToggle);
  
  //Toggle Password from visible to unvisible and change the icon
  document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const passwordToggle = document.getElementById("passwordToggle");
    const passwordIcon = passwordToggle.querySelector("i");
  
    passwordToggle.addEventListener("click", function () {
      const isPasswordVisible = passwordInput.type === "text";
  
      passwordInput.type = isPasswordVisible ? "password" : "text";
      passwordIcon.classList.toggle("fa-eye", !isPasswordVisible);
      passwordIcon.classList.toggle("fa-eye-slash", isPasswordVisible);
    });
  });
  
  // Wait for the DOM to be fully loaded before executing the script
  document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the userEmail from localStorage
    const userEmail = localStorage.getItem("userEmail");
  
    // Select the "sign-in" button element
    const signInBtn = document.querySelector('.btn[data-btn="sign-in"]');
  
    // Select the element containing the buttons
    const bottomDiv = document.querySelector(".bottom");
  
    // Check if the userEmail exists in localStorage
    if (userEmail) {
      // If userEmail exists, remove the "sign-in" button from the DOM
      bottomDiv.removeChild(signInBtn);
    }
  });
  
  // Function to get the active form section
  function getActiveFormSection() {
    return document.querySelector(".form.active");
  }
  
  // Function to get the active form's input fields
  function getActiveFormInputs() {
    const activeForm = getActiveFormSection();
    return activeForm ? activeForm.querySelectorAll("input") : [];
  }
  
  // Function to validate a field
  function validateField(input) {
    const fieldName = input.id;
    const value = input.value.trim();
  
    if (value === "") {
      showError(fieldName, `${fieldName} cannot be empty`);
    } else {
      hideError(fieldName);
    }
  
    // Additional validation for email fields
    if (fieldName === "email" || fieldName === "emailLogin") {
      validateEmailFormat(fieldName, value);
    }
  
    // Additional validation for first name fields
    if (fieldName === "firstName") {
      validateNonEmptyField(fieldName, "First Name");
    }
  
    // Additional validation for last name fields
    if (fieldName === "lastName") {
      validateNonEmptyField(fieldName, "Last Name");
    }
  
    // Additional validation for Phone number fields
    if (fieldName === "phoneNumber") {
      validateNonEmptyField(fieldName, "Phone Number");
    }
  
    // Additional validation for password field
    if (fieldName === "passwordLogin") {
      validateNonEmptyField(fieldName, "Password");
    }
  }
  
  // Function to validate a non-empty field
  function validateNonEmptyField(fieldName, displayName) {
    const value = document.getElementById(fieldName).value.trim();
    if (value === "") {
      showError(fieldName, `${displayName} cannot be empty`);
    } else {
      hideError(fieldName);
    }
  }
  
  // Function to validate the email format
  function validateEmailFormat(fieldName, email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError(fieldName, "Invalid email format");
    } else {
      hideError(fieldName);
    }
  }
  
  // Function to validate the password
  function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@$!%*?&])[A-Za-z\d\-_@$!%*?&]{8,}$/;
  
    if (!passwordRegex.test(password)) {
      showError(
        "password",
        "Password must meet certain criteria (uppercase, lowercase, special characters, and numbers)"
      );
    } else {
      hideError("password");
    }
  }
  
  // Function to validate the confirm password
  function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (confirmPassword === "") {
      showError("confirmPassword", "Confirm Password cannot be empty");
    } else if (password !== confirmPassword) {
      showError("confirmPassword", "Passwords do not match");
    } else {
      hideError("confirmPassword");
    }
  }
  
  // Function to validate the phone number local and international
  function validatePhoneNumber() {
    const phoneNumber = document.getElementById("phoneNumber").value;
    const phoneNumberRegex = /^(?:\+?\d{2,3}\s?)?(?:\d{2,4}\s?)?\d{6,8}$/;
  
    if (!phoneNumberRegex.test(phoneNumber)) {
      showError(
        "phoneNumber",
        "Invalid phone number format. Enter a valid phone number."
      );
    } else {
      hideError("phoneNumber");
    }
  }
  
  // Function to show error messages
  function showError(field, message) {
    const errorElement = document.getElementById(`${field}Error`);
    errorElement.innerHTML = message;
    errorElement.style.display = "block";
  
    const inputElement = document.getElementById(field);
    inputElement.classList.add("error-input");
  }
  
  // Function to hide error messages
  function hideError(field) {
    const errorElement = document.getElementById(`${field}Error`);
    errorElement.style.display = "none";
  
    const inputElement = document.getElementById(field);
    inputElement.classList.remove("error-input");
  }
  
  // Function to validate the active form
  function validateActiveForm() {
    const activeFormInputs = getActiveFormInputs();
    activeFormInputs.forEach(validateField);
  
    if (getActiveFormSection().classList.contains("sign-up")) {
      validatePassword();
      validateConfirmPassword();
      validatePhoneNumber();
    }
  }
  
  // Function to handle form submission for sign-up
  function handleSignUp(event) {
    event.preventDefault();
    validateActiveForm();
    const errorMessages = document.querySelectorAll(".error-message");
    for (const message of errorMessages) {
      if (message.style.display === "block") {
        event.preventDefault(); // Prevent form submission if there are errors
        return;
      }
    }
    if (getActiveFormSection().classList.contains("sign-up")) {
      checkEmailExists();
    } else if (getActiveFormSection().classList.contains("sign-in")) {
      handleSignIn(); 
    }
  }
  
  // Function to check if the email exists
  function checkEmailExists() {
    const email = document.getElementById("email").value;
  
    // Make a GET request to check if the email exists
    fetch(
      `http://localhost/registrationform/api/search-user.php?email=${encodeURIComponent(
        email
      )}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.exists) {
          // Email already exists, show an error message
          showError("email", "This email already exists");
        } else {
          sendData();
        }
      })
      .catch((error) => {
        console.error("Error checking email existence:", error);
      });
  }
  
  // Function to send data for sign-up
  function sendData() {
    const activeFormSection = getActiveFormSection();
    const form = activeFormSection.querySelector("form");
    const formData = new FormData(form);
    // Make a POST request to add user data
    fetch("http://localhost/registrationform/api/add-user.php", {
      method: "post",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Reset the form after successful registration
        form.reset();
        // Show the "Registration Completed" message to the user
        const successMessage = activeFormSection.querySelector("#successMessage");
        successMessage.style.display = "block";
      })
      .catch((error) => {
        console.error("Error sending data to the backend:", error);
      });
  }
  
  // Function to validate the login form
  function validateLoginForm() {
    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;
    hideError("emailLogin");
    hideError("passwordLogin");
  
    if (!email) {
      showError("emailLogin", "Please enter an email address");
      return false;
    }
  
    if (!password) {
      showError("passwordLogin", "Password cannot be empty");
      return false;
    }
  
    return true;
  }
  
  // Function to handle form submission for sign-in
  function handleSignIn(event) {
    event.preventDefault();
    validateActiveForm();
    if (!validateLoginForm()) {
      return;
    } else {
      loginData();
    }
  }
  
  // Add event listeners for form submissions and blur events
  const signUpForm = document.querySelector(".form.sign-up");
  const signInForm = document.querySelector(".form.sign-in");
  
  signUpForm.addEventListener("submit", handleSignUp);
  signInForm.addEventListener("submit", handleSignIn);
  
  const signUpInputs = signUpForm.querySelectorAll("input");
  signUpInputs.forEach((input) => {
    input.addEventListener("blur", () => {
      validateField(input);
      if (signUpForm.classList.contains("active") && input.id === "password") {
        validatePassword();
      } else if (
        signUpForm.classList.contains("active") &&
        input.id === "confirmPassword"
      ) {
        validateConfirmPassword();
      }
    });
  });
  
  const signInInputs = signInForm.querySelectorAll("input");
  signInInputs.forEach((input) => {
    input.addEventListener("blur", () => {
      validateField(input);
    });
  });
  
  const loginForm = document.getElementById("login");
  
  // Function to handle login data submission
  function loginData() {
    const formData = new FormData(loginForm);
    fetch("http://localhost/registrationform/api/login-user.php", {
      method: "post",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          const { email, firstName, lastName } = data.user;
          localStorage.setItem("userEmail", email);
          window.location.href = `main.html?firstName=${firstName}&lastName=${lastName}`;
        } else {
          showError("emailLogin", "Email or password is incorrect");
        }
      })
      .catch((error) => {
        console.error("Error sending data to the backend:", error);
      });
  }