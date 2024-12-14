function handleSubmit(event) {
  event.preventDefault();  
  const name = document.getElementById('fname').value;
  const email = document.getElementById('email').value;
  if(validateForm()){
    document.getElementById('message').innerHTML = "Thank you,"+ name +"!  We will contact you shortly @ "+email;
    console.log(`Name: ${name}, Email: ${email}`);
  }else{
    document.getElementById('message').innerHTML = "Please fix the error messages"
  }
  
}
// Form validation function

function validateForm() {
    // Clear previous error messages
    document.getElementById("fnameError").innerText = "";
    document.getElementById("lnameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("mobileError").innerText = "";

    let isValid = true; // Flag to track if the form is valid

    // Get the form field values
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobileno").value;

    // Validate Name (should not be empty)
    if (fname === "") {
        document.getElementById("fnameError").innerText = "First Name is required.";
        isValid = false;
    }
    if (lname === "") {
        document.getElementById("lnameError").innerText = "Last Name is required.";
        isValid = false;
    }

    // Validate Email (should be a valid email format)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate Mobile Number (should be a 10-digit number)
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        document.getElementById("mobileError").innerText = "Please enter a valid 10-digit mobile number.";
        isValid = false;
    }

    // Return false if the form is not valid (prevents form submission)
    return isValid;
}
