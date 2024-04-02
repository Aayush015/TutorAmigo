function login() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    // Here you would handle the login logic, e.g., sending the data to the server for validation
    console.log("Login with username: " + username + " and password: " + password);
}

function register() {
    var username = document.getElementById("register-username").value;
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-password").value;
    // Here you would handle the registration logic, e.g., sending the data to the server for registration
    console.log("Register with username: " + username + ", email: " + email + ", and password: " + password);
}