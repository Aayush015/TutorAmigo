# TutorAmigo

**TutorAmigo** is a peer-to-peer tutoring and academic assistance platform designed for the **Lobo Hackathon 2024** by **Aayush Kafle**. This platform helps students at the **University of New Mexico (UNM)** connect with peers for academic support, promoting collaboration and success.

---

## Overview

TutorAmigo provides a way for students to connect with others who have taken the same classes. The platform offers features like:
- Peer-to-peer tutoring
- Sharing notes and study strategies
- Discussing potential exam questions

The program incentivizes volunteerism through a **points system**, where students can earn points redeemable for discounts at the **UNM Bookstore**.

---

## Key Features

### User Registration and Login
- Secure registration with robust form validation and password encryption.
- Login system with error handling and clear feedback.

### Class Management
- Add or remove courses you've taken to match with students seeking help.
- Connect with peers who have similar course interests.

### Session Scheduling
- Schedule tutoring or assistance sessions directly with other students.

### Points System
- Earn points by volunteering to assist others.
- Redeem points for discounts on school supplies via QR codes.

### Discount Redemption
- Generate QR codes for bookstore discounts using accumulated points.

---

## Technologies Used

### Frontend
- **HTML**: Application structure and layout.
- **CSS**: Custom styles with a responsive design for mobile and desktop.
- **JavaScript**: Client-side form validation, dynamic interactions, and localStorage.

### Backend
- **PHP**: API endpoints for user registration, login, and database communication.
- **MySQL**: Relational database to store user and session data.

---

## Project Structure

### Frontend Files
- **HTML Files**:
  - `index.html`: Registration and login forms.
  - `main.html`: Dashboard with session management and logout functionality.
- **CSS**:
  - `styles.css`: Main stylesheet with responsive design and reusable variables.
- **JavaScript**:
  - `index.js`: Manages form toggling, input validation, and API calls.
  - `main.js`: Handles session persistence and logout operations.

### Backend Files
- **PHP Files**:
  - `add-user.php`: Endpoint for user registration.
  - `login-user.php`: Endpoint for login validation.
  - `search-user.php`: Checks if an email is already registered.
  - `connect.php`: Establishes the database connection.

### Database
- **MySQL Schema**:
  - Table: `tbl_user`
    - Stores user information, including hashed passwords, email addresses, and user metadata.

---

## How to Run the Project

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd TutorAmigo
    ```
1. **Set Up the Database
- Import the SQL dump file provided in the project to your MySQL database.
- Update the file `php/includes/connect.php` with your database credentials, including:
  - Host
  - Username
  - Password
  - Database name

3. **Run the Backend
- Use a local PHP server (e.g., XAMPP, WAMP) to serve the `php/` directory.

3. **Run the Frontend
- Open `html/index.html` in a browser to access the application.

---

## Planned Enhancements

### Payment Processing
- Implement secure online payment functionality to facilitate paid tutoring sessions.

### Friend Connections
- Add the ability for users to connect with friends and form collaborative study groups.
