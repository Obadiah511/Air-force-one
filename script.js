
// a) Variables and console.log()
let studentName = "Brian Otieno";
let registrationNumber = "CS/001/2024";
let academicProgramme = "Computer Science";

console.log("Student Name: " + studentName);
console.log("Registration Number: " + registrationNumber);
console.log("Academic Programme: " + academicProgramme);

// b) Grade calculation function
function calculateGrade(score) {
    if (score >= 70 && score <= 100) {
        return "A";
    } else if (score >= 60) {
        return "B";
    } else if (score >= 50) {
        return "C";
    } else if (score >= 40) {
        return "D";
    } else {
        return "E";
    }
}

// c) Call the function with 75 and display the result using alert()
let grade = calculateGrade(75);
alert("The grade for a score of 75 is: " + grade);


// ===== QUESTION SIX =====

// a) Retrieve the registration form from the document
const registrationForm = document.getElementById("registration").querySelector("form");


// ===== QUESTION SEVEN =====

// Email format validation helper
function isEmailValid(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Question Six (b) + Seven: submit listener with validation
registrationForm.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    // c) Retrieve the form values
    const name = document.getElementById("fullname").value.trim();
    const regNo = document.getElementById("regno").value.trim();
    const email = document.getElementById("email").value.trim();
    const output = document.getElementById("output");

    // Q7 a) Name and registration number must not be empty
    if (name === "") {
        output.innerHTML = "<p style='color:red;'>Error: Full name cannot be empty.</p>";
        return;
    }
    if (regNo === "") {
        output.innerHTML = "<p style='color:red;'>Error: Registration number cannot be empty.</p>";
        return;
    }

    // Q7 b) Email must follow a valid format
    if (!isEmailValid(email)) {
        output.innerHTML = "<p style='color:red;'>Error: Please enter a valid email address.</p>";
        return;
    }

    // Q6 c) Display the details, Q6 d) and the success message
    output.innerHTML =
        "<p><strong>Name:</strong> " + name + "</p>" +
        "<p><strong>Registration Number:</strong> " + regNo + "</p>" +
        "<p style='color:green; font-weight:bold;'>Registration successful!</p>";

    registrationForm.reset();
});
