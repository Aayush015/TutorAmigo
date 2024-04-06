<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

include_once "../includes/connect.php";

function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Assuming the form fields are named "firstName", "lastName", "email", "password", "confirmPassword", and "phoneNumber"
    $firstName = mysqli_real_escape_string($conn, $_POST['txt-fname']);
    $lastName = mysqli_real_escape_string($conn, $_POST['txt-lname']);
    $email = mysqli_real_escape_string($conn, $_POST['txt-email']);
    $password = mysqli_real_escape_string($conn, $_POST['txt-pass']);
    $confirmPassword = mysqli_real_escape_string($conn, $_POST['txt-cpass']);
    $phoneNumber = mysqli_real_escape_string($conn, $_POST['txt-phone']);

    if (!empty($firstName) && !empty($lastName) && !empty($email) && !empty($password) && !empty($phoneNumber)) {
        if ($password === $confirmPassword) {
            // Validate email format using isValidEmail function
            if (isValidEmail($email)) {
                // Hash the password
                $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

                // Create the SQL query
                $sql = "INSERT INTO tbl_user (db_fname, db_lname, db_email, db_encpass, db_phone) VALUES ('$firstName', '$lastName', '$email', '$hashedPassword', '$phoneNumber')";

                if (mysqli_query($conn, $sql) or die(mysqli_error($conn))) {
                    // Data inserted successfully
                    echo json_encode(array("message" => "User added successfully"));
                } else {
                    // Error inserting data
                    echo json_encode(array("message" => "Error adding user to the database"));
                }
            } else {
                // Invalid email format
                echo json_encode(array("message" => "Invalid email format"));
            }
        } else {
            // Passwords do not match
            echo json_encode(array("message" => "Passwords do not match"));
        }
    } else {
        // Required fields are empty
        echo json_encode(array("message" => "Please fill in all required fields"));
    }

    // Close the database connection
    $conn->close();
}
?>