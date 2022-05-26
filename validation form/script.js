let fname = document.forms["myForm"]["fname"];
let lname = document.forms["myForm"]["lname"];
let email = document.forms["myForm"]["email"];
let password = document.forms["myForm"]["password"];
let error = document.querySelector("form .content p");

document.getElementById("form").onsubmit = function() {
    if (fname.value == "" || lname.value == "" || email.value == "") {
        error.innerHTML = "Please fill all the fields";
        return false;
    }
    let validation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(validation.test(password.value) !== true) {
        error.innerHTML = "password must be at least 8 char contain upper and special char";
        return false
    }
}

document.getElementById("form").onreset = function() {
    error.innerHTML = "";
}