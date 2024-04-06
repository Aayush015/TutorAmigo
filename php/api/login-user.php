<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

include_once "../includes/connect.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Assuming the form fields are named "txt-email" and "txt-pass"
    // Prepare the data for inserting into the database (you should sanitize the data to prevent SQL injection)
    $email = mysqli_real_escape_string($conn, $_POST['txt-emailLogin']);
    $password = mysqli_real_escape_string($conn, $_POST['txt-passLogin']);

    if (!empty($email) && !empty($password)) {
        // Check if the user exists in the database
        // Replace the following query with your database query logic
        $query = "SELECT * FROM tbl_user WHERE db_email = '$email' limit 1";
        $result = mysqli_query($conn, $query) or die(mysqli_error($conn));
        $count = mysqli_num_rows($result);
        while ($row = mysqli_fetch_array($result)) {
            $fname = $row['db_fname'];
            $lname = $row['db_lname'];
            $storedHashedPassword = $row['db_encpass']; // Fetch the stored hashed password
        }

        if ($count == 1 && password_verify($password, $storedHashedPassword)) {
            // User exists and password is correct, send a success response
            echo json_encode(array("success" => true, "user" => array("firstName" => $fname, "lastName" => $lname, "email" => $email)));
        } else {
            // Either user doesn't exist or password is incorrect, send a failure response
            echo json_encode(array("success" => false));
        }
    } else {
        // Required fields are empty, send a failure response
        echo json_encode(array("success" => false));
    }

    // Close the database connection
    $conn->close();
}