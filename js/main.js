// Function to get URL parameter values by name
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  // Check if userEmail is stored in localStorage
  if (!localStorage.getItem("userEmail")) {
    window.location.href = "index.html"; // Redirect
  } else {
    // Get firstName and lastName from URL parameters
    const firstName = getUrlParameter("firstName");
    const lastName = getUrlParameter("lastName");
  
    // Display welcome message
    const welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.innerHTML = `Welcome, ${firstName} ${lastName}!`;
  
    // Add click event listener to the logout button
    const logoutButton = document.getElementById("logoutButton");
    logoutButton.addEventListener("click", () => {
      // Remove userEmail from localStorage and redirect to login page
      localStorage.removeItem("userEmail");
      window.location.href = "index.html"; // Replace with your login page URL
    });
  }