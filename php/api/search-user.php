<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");

include_once "../includes/connect.php";

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Get the email from the query parameter
     // Prepare the data for querying the database (you should sanitize the data to prevent SQL injection)
    $email = mysqli_real_escape_string($conn,$_GET['email']);
    
    // Query the database to check if the email exists
    $result = mysqli_query($conn, "SELECT COUNT(*) as count FROM tbl_user WHERE db_email = '$email'") or die(mysqli_error($conn));
    $row = mysqli_fetch_assoc($result);
    $exists = $row['count'] > 0;

    // Return the result as JSON
    echo json_encode(array("exists" => $exists));
}