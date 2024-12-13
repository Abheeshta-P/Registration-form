<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $address = htmlspecialchars($_POST['address']);

    // Simple validation for empty fields (for example purposes)
    if (empty($name) || empty($email) || empty($phone) || empty($address)) {
        echo "<p style='color: red;'>All fields are required!</p>";
    } else {
        // Display the submitted data
        echo "<h3>Registration Successful</h3>";
        echo "<p><strong>Name:</strong> $name</p>";
        echo "<p><strong>Email:</strong> $email</p>";
        echo "<p><strong>Phone:</strong> $phone</p>";
        echo "<p><strong>Address:</strong> $address</p>";
    }
}
?>
